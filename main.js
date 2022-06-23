/*
 * @Author: shiliangL
 * @Date: 2022-06-20 09:03:57
 * @LastEditTime: 2022-06-20 10:44:37
 * @LastEditors: Do not edit
 * @Description:
 */
import './style.css';
import './src/styles/index.scss';
// import background from '@/images/background.svg';
import gsap from 'gsap';
import db from '@/data/db.json';

console.log(db, '=db=');

function initAnimation() {
  const tween = gsap.timeline({ delay: 0.8 });
  tween.from('#app header', {
    direction: 'y',
    duration: 0.5,
    y: -16 * 6,
    ease: 'power2',
  });

  // 从原本属性=>变换到vars定义属性  相当于设置属性
  tween.to('#app header', { duration: 0, transition: 0.3 });

  tween.from('#app .info', {
    duration: 0.5,
    ease: 'power2',
    opacity: 0,
    y: 40,
  });

  // 从vars定义属性=>变换到原本属性 相当于还原属性
  tween.from('#app .background-svg', {
    direction: 1.5,
    opacity: 0,
    ease: 'power2',
    x: 200,
  });
}

window.onload = () => {
  initAnimation();
};
