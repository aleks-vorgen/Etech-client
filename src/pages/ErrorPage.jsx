import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-[1110px] mx-auto text-center">
      <h1 className="text-[300px] font-[700] text-orange">404</h1>
      <p>
        Такої сторінки не існує.{`:(`} <br />
        Спробуйте знайти щось інше, верхнє меню допоможе!
      </p>
      <img src="/src/public/images/404/404.svg" alt="404" />
    </div>
  );
};

export default ErrorPage;
