import { uploadPost } from "api/services";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./style.css";

const ProductRegister = () => {
  const store = useSelector((store) => store.user);
  const [images, setImages] = useState([]);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      uid: store.uid,
      author: store.username,
      productName: "",
      content: "",
      credentialID: "",
    },
  });

  const uploadImage = (e) => {
    console.log(e.target.files);
    const listFiles = Array.from(e.target.files);
    listFiles.forEach((item) => setImages((prevList) => [...prevList, item]));
  };

  const onSubmit = (data) => {
    const fullData = { ...data, images: images };
    console.log(fullData);
    uploadPost(fullData)
      .then((data) => {
        console.log("Successfully!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="product-register">
      <form onSubmit={handleSubmit(onSubmit)} className="product-register-form">
        <h1 className="form-title green-tea">
          Đăng ký sản phẩm ngay bây giờ cùng Flite
        </h1>
        <input
          className="input-field-style"
          type="text"
          name="product-name"
          placeholder="Tên sản phẩm"
          {...register("productName")}
          required
        />
        <input
          className="input-field-style"
          type="number"
          placeholder="Giá cả"
          {...register("prize")}
          required
        />
        <input
          className="input-field-style"
          type="number"
          placeholder="Sản lượng"
          {...register("amount")}
          required
        />

        <input
          className="input-field-style"
          type="text"
          placeholder="Nguồn gốc (Địa chỉ)"
          {...register("location")}
          required
        />

        <input
          className="input-field-style"
          type="text"
          placeholder="Credential ID (Nếu có)"
          {...register("credentialID")}
        />

        <textarea
          className="input-field-style"
          type="text"
          placeholder="Mô tả sản phẩm của bạn (Nên đạt 150 chữ)"
          {...register("content")}
          required
        />

        <input
          className="input-field-style"
          type="file"
          placeholder="Hình ảnh"
          multiple="multiple"
          onChange={(e) => uploadImage(e)}
          required
        />

        <div>
          <input type="checkbox" name="agree-policy" required />
          <p className="checkbox-label">
            Tôi đã đồng ý với các điều khoản Flite
          </p>
        </div>

        <input type="submit" className={`btn btn-submit`} />
      </form>
    </div>
  );
};

export default ProductRegister;
