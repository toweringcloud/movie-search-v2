import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { getMovie, makeBgPath } from "../api";

const Wrapper = styled(motion.div)`
	position: fixed;
	z-index: 9;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled(motion.div)`
	position: relative;
	z-index: 10;
	overflow: hidden;
	border-radius: 10px;
	width: min(800px, 80%);
	height: min(800px, 80%);
	background-color: #171717;
`;

const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	background-size: cover;
	background-image: linear-gradient(to top, #171717, transparent),
		url("${(props) => props.$bg}");
	padding: 20px;
	height: 60%;
`;
const CloseBtn = styled.span`
	height: 30px;
	width: 30px;
	cursor: pointer;
`;

const Content = styled.div`
	padding: 0px 20px;
`;
const Title = styled.h1`
	position: relative;
	top: -10px;
	color: white;
	font-weight: 600;
	font-size: 36px;
`;
const Description = styled.p`
	font-size: 14px;
	line-height: 1.2;
`;
const Units = styled.div`
	font-size: 14px;
	margin-top: 20px;
`;
const Unit = styled.div`
	margin-bottom: 5px;
	span {
		font-weight: 600;
	}
`;

export default function MovieDetail({ id, title, onCloseClick }) {
	const { data } = useQuery(["movie", id], () => getMovie(id.toString()));

	return (
		<Wrapper>
			<Overlay />
			<Modal layoutId={`${id}`}>
				<Header $bg={makeBgPath(data?.backdrop_path || "")}>
					<CloseBtn onClick={onCloseClick}>
						<svg
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								clipRule="evenodd"
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
							></path>
						</svg>
					</CloseBtn>
				</Header>
				<Content>
					<Title>{title}</Title>
					<Description>{data?.overview}</Description>
					<Units>
						<Unit>
							Budget:
							<span>
								{" "}
								{new Intl.NumberFormat("kr", {
									style: "currency",
									currency: "USD",
								}).format(data?.budget || 0)}
							</span>
						</Unit>
						<Unit>
							Revenue:
							<span>
								{" "}
								{new Intl.NumberFormat("kr", {
									style: "currency",
									currency: "USD",
								}).format(data?.revenue || 0)}
							</span>
						</Unit>
						<Unit>
							Runtime:
							<span> {data?.runtime} minutes</span>
						</Unit>
						<Unit>
							Rating:
							<span> {data?.vote_average.toFixed(1)}</span>
						</Unit>
						<Unit>
							Homepage:
							<span>
								{" "}
								<a href={data?.homepage}>{data?.homepage}</a>
							</span>
						</Unit>
					</Units>
				</Content>
			</Modal>
		</Wrapper>
	);
}
