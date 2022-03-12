import client from "./util/client";

export const cancelSign = async (data: any) => {
  await client.delete("/report?Url=" + data.url);
};
