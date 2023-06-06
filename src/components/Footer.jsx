import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-blue bottom-0 w-full text-white min-w-[1110px]">
      <div className="w-[1110px] mx-auto grid gap-8 pt-10 items-center">
        <div className="grid grid-cols-3 gap-4">
          <div className="grid">
            <p className="text-orange font-bold text-4xl leading-[61.7px]">Silex</p>
            <p className="pt-10">
              Інтернет магазин електронної техніки,
              в якому знайдеться все, що потрібно
            </p>
          </div>
          <div className="grid border-l-2 border-white/30 justify-center text-start pt-2">
            <span className="text-lg font-semibold text-16 uppercase">Про компанию</span>
            <Link to="/error" className="block" onClick={() => scroll.scrollTo('error')}>Доставка</Link>
            <Link to="/checkout" className="block" onClick={() => scroll.scrollTo('checkout')}>Оплата</Link>
            <Link to="/contact" className="block" onClick={() => scroll.scrollTo('contact')}>Контакти</Link>
            <Link to="/products" className="block" onClick={() => scroll.scrollTo('products', { smooth: true, duration: 500 })}>Категорії</Link>
          </div>
        </div>
        <div className="justify-center flex items-center border-t-2 border-white/60 py-6">
          <span className="text-white/70">© {new Date().getFullYear()} - Наш найкращий магазин</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

