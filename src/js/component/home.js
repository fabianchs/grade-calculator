import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [credits, setCredits] = useState([""]);
	const [grades, setGrades] = useState([""]);
	const [renderedEditor, setRenderedEditor] = useState([""]);

	function editGrade(e, index) {
		let aux_grades = grades;

		aux_grades[index] = e.target.value;

		setGrades(aux_grades);
	}

	function editCredit(e, index) {
		let aux_credits = credits;

		aux_credits[index] = e.target.value;

		setGrades(aux_credits);
	}

	function addToArrays() {
		let aux_credits = credits;
		let aux_grades = grades;

		aux_credits.push("");
		aux_grades.push("");

		setCredits(aux_credits);
		setGrades(aux_grades);

		createInputs();
	}

	function deleteFromArrays() {
		let aux_credits = credits;
		let aux_grades = grades;

		if (aux_credits.length > 1) {
			aux_credits.splice(-1, 1);
			aux_grades.splice(-1, 1);
		}

		setCredits(aux_credits);
		setGrades(aux_grades);

		createInputs();
	}

	function createGrades() {
		let new_credits = [];
		let new_grades = [];

		for (let i = 0; i < credits.length; i++) {
			if (credits[i] > 0) {
				new_credits.push(credits[i]);
				new_grades.push(grades[i]);
			}
		}

		const final_grades = new_grades.map((element, index) => {
			return element * new_credits[index];
		});

		let counter = 0;
		let counter_credits = 0;
		let final = 0;

		console.log(final_grades);

		for (let i = 0; i < final_grades.length; i++) {
			counter = counter + parseInt(final_grades[i]);
			counter_credits = counter_credits + parseInt(credits[i]);
		}

		final = counter / counter_credits;

		console.log(final);
	}

	function createInputs() {
		const list_inputs = credits.map((element, index) => (
			<div className="row" key={index}>
				<div className="col-6" key={index.toString + "credits"}>
					<Input
						type="text"
						name="text"
						defaultValue={element}
						placeholder="Credits"
						className="m-1 border-dark"
						onChange={() => {
							editCredit(event, index);
						}}
					/>
				</div>
				<div className="col-6" key={index.toString + "grades"}>
					<Input
						type="text"
						name="text"
						placeholder="Grade"
						className="m-1 border-dark"
						defaultValue={grades[index]}
						onChange={() => {
							editGrade(event, index);
						}}
					/>
				</div>
			</div>
		));

		setRenderedEditor(list_inputs);
	}

	useEffect(() => {
		createInputs();
	}, []);

	return (
		<div className="text-center text-light mt-5">
			<h1>
				Hello! Here is a simple way to calculate the semester grade{" "}
				<img
					src="https://64.media.tumblr.com/tumblr_mcm1ec68fN1qfqgb9o1_1280.gif"
					style={{ height: "54.5px" }}></img>
			</h1>
			<div className="row d-flex justify-content-center">
				<div className="col-xl-3 col-lg-3 col-md-9 col-sm-12 ">
					<div className="d-flex justify-content-center">
						<button
							type="button"
							className="btn btn-light m-1"
							onClick={() => {
								addToArrays();
							}}>
							<i className="fas fa-plus"></i>
						</button>
						<button
							type="button"
							className="btn btn-light m-1 "
							onClick={() => {
								deleteFromArrays();
							}}>
							<i className="fas fa-minus"></i>
						</button>
					</div>
					<div className="row">
						<div className="col-6">Credits</div>
						<div className="col-6">Grade</div>
					</div>
					<div key={credits.length + grades.length}>
						{renderedEditor}
					</div>
				</div>
			</div>

			<button
				className="btn btn-info m-2"
				onClick={() => [createGrades()]}>
				Calculate
			</button>
		</div>
	);
}
