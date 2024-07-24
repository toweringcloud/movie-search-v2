import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Error from "./components/Error";
import NotFound from "./components/NotFound";

import Popular from "./screens/Popular";
import ComingSoon from "./screens/ComingSoon";
import NowPlaying from "./screens/NowPlaying";

const Wrapper = styled.div`
	width: 98vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<Layout />
			</ProtectedRoute>
		),
		children: [
			{
				path: "",
				element: <Popular />,
				errorElement: <Error />,
			},
			{
				path: "coming-soon",
				element: <ComingSoon />,
			},
			{
				path: "now-playing",
				element: <NowPlaying />,
			},
		],
		errorElement: <NotFound />,
	},
]);

export default function App() {
	return (
		<Wrapper>
			<RouterProvider router={router} />
		</Wrapper>
	);
}
