import { toast } from "react-toastify";

// Method returns multiple random values from array
export const getMultipleRandoms = (dataArr, limit) => {
  // Sort the array randomly
  const randomArr = dataArr.sort(() => 0.5 - Math.random());

  return randomArr.slice(0, limit).join("");
};

export const copyToClipboard = (text) => {
  if (text !== "") {
    navigator.clipboard.writeText(text);
    toast.success("Password copied to clipboard!");
  } else {
    toast.error("Please generate the password first!");
  }
};
