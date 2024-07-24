import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";

import Loader from "../components/Loader";
import Movie from "../components/Movie";
import { getPopular } from "../api";

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 100px;
	padding: 0px 50px;
	gap: 40px;
`;

export default function Home() {
	const { isLoading, data } = useQuery({
		queryKey: ["popular"],
		queryFn: getPopular,
	});
	console.log(data?.results);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Movies: Popular</title>
			</Helmet>
			{isLoading ? (
				<Loader />
			) : (
				<Wrapper>
					{data?.results.map((movie, index) => (
						<Movie key={movie.id} index={index} {...movie} />
					))}
				</Wrapper>
			)}
		</>
	);
}
