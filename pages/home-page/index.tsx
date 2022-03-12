import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import styles from "./index.module.css";
import { setSign } from "../api/set-sign";
import { cancelSign } from "../api/cancel.sign";
import 'react-toastify/dist/ReactToastify.css';

interface ISetParam {
  Url: string;
  AddressInfo: string;
}
interface ItoastSth {
  (
    toastMode: "success" | "warning" | "error" | "info",
    toastText: string,
    toastSetting: object
  ): void;
}

const HomePage: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { register: registerForCancel, handleSubmit: handleSubmitForCancel } =
    useForm();

  const onSetSubmit: SubmitHandler<any> = async (data) => {
    await setSign(data);
  };

  const onCancelSubmit: SubmitHandler<any> = async (data) => {
    await cancelSign(data)
  };

  return (
    <div className={styles.background}>
      <ToastContainer hideProgressBar={true}/>
      <div className={styles.info_card_1}>
        <h2>👀 这是个啥?</h2>
        <p>
          这是一个获取你的网址，然后就可以帮你每天健康打卡的脚本～(以后辅导员再也不用催我打卡啦～)任何
          NCU 的同学都可以使用
        </p>
      </div>
      <div className={styles.info_card_2}>
        <h2>🤔 How to use?</h2>
        <p>1.打开微信/企业微信 </p>
        <p>2.找到"a学生疫情常态化管理"</p>
        <img src="/img_1.jpg" />
        <p>3.点击进入后,点击右上角三个小圆点,选择"复制链接"</p>
        <img src="/img_2.png"/>
      </div>
      <div className={styles.input_card_1}>
        <form onSubmit={handleSubmit(onSetSubmit)}>
          <h2 style={{ color: "rgb(64, 197, 133)" }}>🙌 设置自动打卡</h2>
          <span style={{ margin: "10px 0 10px 0" }}>
            1. 填写步骤3中复制的链接
          </span>
          <input type={"url"} {...register("url")} placeholder="粘贴链接" />
          <span style={{ margin: "10px 0 10px 0" }}>
            2. 填写打卡的详细地址(默认为：江西省南昌大学)
          </span>
          <input {...register("addressInfo")} placeholder="填写地址" />
          <div className={styles.submit_btn}>
            <input type={"submit"} />
          </div>
        </form>
      </div>
      <div className={styles.input_card_2}>
        <form onSubmit={handleSubmitForCancel(onCancelSubmit)}>
          <h2 style={{ color: "rgb(248, 54, 54)" }}>❌ 取消自动打卡</h2>
          <span style={{ margin: "10px 0 10px 0" }}>
            填写步骤3中复制的链接
          </span>
          <input
            type={"url"}
            {...registerForCancel("url")}
            placeholder="粘贴链接"
          />
          <div className={styles.submit_btn}>
            <input type={"submit"} />
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage

export const toastSth: ItoastSth = (toastMode, toastText, toastSetting) => {
  switch (toastMode) {
    case "success":
      toast.success(toastText, toastSetting);
      break;
    case "warning":
      toast.warning(toastText, toastSetting);
      break;
    case "error":
      toast.error(toastText, toastSetting);
      break;
    case "info":
      toast.info(toastText, toastSetting);
      break;
    default:
      break;
  }
};