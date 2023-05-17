import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-blue bottom-0 w-full mt-[100px] max-h-[400px]  text-white">
      <div className="w-[1110px] mx-auto grid gap-8 pt-10 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="grid">
            <span className="text-orange font-bold text-4xl leading-[61.7px]">e-tech</span>
            <span className="pt-10">
              Lorem ipsum, sample text
              Lorem ipsum, sample text Lorem ipsum,
              sample text Lorem ipsum, sample text
              Lorem ipsum, sample text Lorem ipsum,
              sample text
            </span>
          </div>
          <div className="grid border-l-2 border-white/30 justify-center text-center">
            <span className="text-lg font-semibold text-16 uppercase">Про компанию</span>
            <Link to="/error" className="block" onClick={() => scroll.scrollTo('error')}>Доставка</Link>
            <Link to="/checkout" className="block" onClick={() => scroll.scrollTo('checkout')}>Оплата</Link>
            <Link to="/contact" className="block" onClick={() => scroll.scrollTo('contact')}>Контакти</Link>
            <Link to="/contact" className="block" onClick={() => scroll.scrollTo('contact')}>Контакти</Link>
            <Link to="/products" className="block" onClick={() => scroll.scrollTo('products', { smooth: true, duration: 500 })}>Категорії</Link>
          </div>
        </div>
        <div className="justify-center flex items-center border-t-2 border-white/60 py-6">
          <span className="text-white/70">(c) 2022 - Наш найкращий магазин</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
