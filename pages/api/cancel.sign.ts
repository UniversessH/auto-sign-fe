import client from "./util/client";

export const cancelSign = async (data: any) => {
  let formData = new FormData();
  formData.append("Url", data.url);
  // await client.delete("/report", formData);
};
