import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, useAnimation, useScroll } from 'framer-motion';

const Wrapper = styled.div`
	width: 100%;
	height: 300vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const Nav = styled(motion.nav)`
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 600;
	position: fixed;
	width: 100%;
	top: 0;
	padding: 25px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const navVariants = {
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
};

const Items = styled.ul`
	display: flex;
	align-items: center;
`;
const Item = styled.li`
	position: relative;
	margin-right: 20px;
	color: white;
	transition: color 0.3s ease-in-out;
	display: flex;
	justify-content: center;
	flex-direction: column;
	&:hover {
		color: gray;
	}
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;

export default function Layout() {
  const routeMatched = (specificRoute) => {
    const location = useLocation();
    console.log(specificRoute + ' : ' + location.pathname);
    return specificRoute === location.pathname;
  };

  const homeMatched = routeMatched('/');
  const soonMatched = routeMatched('/coming-soon');
  const nowMatched = routeMatched('/now-playing');

  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [scrollY, navAnimation]);

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movie Search</title>
      </Helmet>
      <Nav variants={navVariants} animate={navAnimation} initial={'top'}>
        <Items>
          <Item>
            <Link to="/">
              POPULAR
              {homeMatched && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to={'/coming-soon'}>
              COMING SOON
              {soonMatched && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to={'/now-playing'}>
              NOW PLAYING
              {nowMatched && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Nav>
      <Outlet />
    </Wrapper>
  );
}
