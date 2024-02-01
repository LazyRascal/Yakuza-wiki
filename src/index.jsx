import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import YakuzaKiwami from './YakuzaKiwami';
import YakuzaKiwami2 from './YakuzaKiwami2';
import Yakuza3 from './Yakuza3';
import Yakuza4 from './Yakuza4';
import Yakuza5 from './Yakuza5';
import Yakuza6 from './Yakuza6';
import Yakuza0 from './Yakuza0';
import YakuzaIshin from './YakuzaIshin';
import Judgement from './Judgement';
import YakuzaLikeADragon from './YakuzaLikeADragon';
import Character from './Character';
import Donate from './Donate';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	},
	{
	  path: "/Yakuza Kiwami",
	  element: <YakuzaKiwami />,
	},
	{
	  path: "/Yakuza Kiwami 2",
	  element: <YakuzaKiwami2 />,
	},
	{
	  path: "/Yakuza 3",
	  element: <Yakuza3 />,
	},
	{
	  path: "/Yakuza 4",
	  element: <Yakuza4 />,
	},
	{
	  path: "/Yakuza 5",
	  element: <Yakuza5 />,
    },
	{
	  path: "/Yakuza 6",
	  element: <Yakuza6 />,
	},
	{
		path: "/Yakuza 0",
		element: <Yakuza0 />,
	},
	{
		path: "/YakuzaIshin",
		element: <YakuzaIshin />,
	},
	{
		path: "/Judgement",
		element: <Judgement />,
	},
	{
		path: "/YakuzaLikeADragon",
		element: <YakuzaLikeADragon />,
	},
	{
		path: "/Character",
		element: <Character />,
	},
	{
		path: "/Donate",
		element: <Donate />,
	},
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
	  <RouterProvider router={router} />
	</React.StrictMode>
  );
