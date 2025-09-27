export const findState: () => boolean = function () {
  return (
    document.cookie
      ?.split(";")
      ?.map((e) => e.split("="))
      ?.find((e) => e[0] == " sidebar_state")?.[1] === "true"
  );
};
