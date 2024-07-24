import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MovieDetail from "./MovieDetail";
import { makeImagePath } from "../api";

const Wrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	word-break: break-word;
	cursor: pointer;
`;
const WrapperVariants = {
	initial: { scale: 0.5, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
};

const Poster = styled(motion.img)`
	margin-bottom: 10px;
	border-radius: 10px;
	height: 200px;
`;

const Title = styled.div`
	font-size: 14px;
	font-weight: 600;
	text-align: center;
	width: 150px;
	word-break: break-word;
`;

export default function Movie({ id, index, original_title, poster_path }) {
	const [detailOpen, setDetailOpen] = useState(false);
	const openMovieDetail = () => {
		setDetailOpen(true);
	};
	const closeMovieDetail = () => {
		setDetailOpen(false);
	};

	return (
		<>
			<Wrapper
				initial="initial"
				animate="animate"
				variants={WrapperVariants}
				transition={{ delay: index / 5 }}
				onClick={openMovieDetail}
			>
				<Poster
					src={makeImagePath(poster_path)}
					layoutId={`${id}`}
					whileHover={{ scale: 1.1, y: -20 }}
				/>
				<Title>{original_title}</Title>
			</Wrapper>
			<AnimatePresence>
				{detailOpen ? (
					<MovieDetail
						id={id}
						title={original_title}
						onCloseClick={closeMovieDetail}
					/>
				) : null}
			</AnimatePresence>
		</>
	);
}
