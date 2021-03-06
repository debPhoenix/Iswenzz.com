import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Project, LinkedProjectProps, ProjectProps } from "./Project";
import * as redux from "react-redux";
import { Card } from "@material-ui/core";
import { store } from "application";

const project: LinkedProjectProps = {
	title: "AION Chat",
	sourceURL: "https://github.com/Iswenzz/AION-Chat",
	isOpenSource: true,
	showTitle: false,
	width: "200px",
	height: "100px",
	cardImage: "https://i.imgur.com/tyhB0rJ.png",
	renderUrl: "https://raw.githubusercontent.com/Iswenzz/AION-Chat/master/README.md",
	renderIcons: [
		{"name": "C#", "src": "https://iswenzz.com:1337/iswenzz/devicons/csharp.svg"},
		{"name": ".NET", "src": "https://iswenzz.com:1337/iswenzz/devicons/dotnet.svg"}
	]
};

describe("[Container] <Project>", () => 
{
	let wrapper: ReactWrapper<ProjectProps>;
    
	beforeEach(() => 
	{
		wrapper = mount((
			<redux.Provider store={store}>
				<Project currentProj={project} projects={[project]}/>
			</redux.Provider>
		));
	});

	it("Testing component", () => 
	{
		wrapper.find(Card).simulate("click");
	});
});
