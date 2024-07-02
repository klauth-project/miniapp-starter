/**
 * Loads and parses the state from session storage.
 *
 * @return {Object | undefined} Parsed state object or undefined if state is not found.
 */
export const loadState = () => {
  try {
    const jsonStr = sessionStorage.getItem("state");
    if (jsonStr === null) {
      return undefined;
    }
    return JSON.parse(jsonStr);
  } catch (e) {
    return undefined;
  }
};

/**
 * A function to save the state to session storage.
 *
 * @param {any} state - The state object to be saved.
 * @return {void} No explicit return value.
 */
export const saveState = (state) => {
  try {
    const json = JSON.stringify(state);
    sessionStorage.setItem("state", json);
  } catch (e) {}
};

/**
 * fetch and return decrypted data from local storage.
 *
 * @param {*} strName key to be fetched from localstorage and decrypted.
 * @param {boolean} useSession flag to determine the type of storage to use, defaults to false.
 * @return {any} the decrypted data corresponding to the provided key, or null if not found.
 */
export const retrieveData = (strName, useSession = false) => {
  try {
    const storage = useSession ? localStorage : sessionStorage;

    if (typeof storage !== "undefined" && storage.getItem("cookie")) {
      const strCookieJson = storage.getItem("cookie");

      if (strCookieJson && strCookieJson !== "") {
        const CookieJson = JSON.parse(strCookieJson);
        if (CookieJson && CookieJson[strName]) {
          return CookieJson[strName];
        }
      }
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

/**
 * A function to persist data to local storage based on the provided name and payload.
 *
 * @param {string} strName - The key name to save the data under.
 * @param {any} objPayload - The data to be stored.
 */
export const persistData = (strName, objPayload, useSession = true) => {
  const storage = useSession ? sessionStorage : localStorage;
  if (typeof storage !== "undefined") {
    const strCookieJson = storage.getItem("cookie");
    if (strCookieJson) {
      const CookieJson = JSON.parse(strCookieJson);
      CookieJson[strName] = objPayload;
    } else {
      const CookieJson = {};
      CookieJson[strName] = objPayload;
    }
  }
};

/**
 * Removes data from local storage based on the provided name.
 *
 * @param {string} strName - The key name to remove the data from.
 * @param {boolean} [useSession=true] - Flag to determine whether to use session storage or local storage.
 * @return {void} This function does not return anything.
 */
export const removeData = (strName, useSession = true) => {
  const storage = useSession ? sessionStorage : localStorage;
  if (typeof storage !== "undefined") {
    const strCookieJson = storage.getItem("cookie");
    if (strCookieJson) {
      const CookieJson = JSON.parse(strCookieJson);
      delete CookieJson[strName];
      storage.setItem("cookie", JSON.stringify(CookieJson));
    }
  }
};

/**
 * Clears the cookie storage.
 *
 * @param {boolean} [useSession=true] - Flag to determine whether to use session storage or local storage.
 * @return {void} This function does not return anything.
 */
export const clearCookie = (useSession = true) => {
  const storage = useSession ? sessionStorage : localStorage;
  if (typeof storage !== "undefined") {
    storage.clear();
  }
};
