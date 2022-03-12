import client from "./util/client";

export const setSign = async (data: any) => {
  let formData = new FormData();
  formData.append("Url", data.url);
  formData.append("AddressInfo", data.addressInfo);
  await client.post("/report", formData);
};
