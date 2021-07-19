import { func } from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [credits, setCredits] = useState([]);
	const [grades, setGrades] = useState([]);

	function addToArrays() {
		let aux_credits = credits;
		let aux_grades = grades;

		aux_credits.push("");
		aux_grades.push("");

		setCredits(aux_credits);
		setGrades(aux_grades);
	}

	function deleteFromArrays() {
		let aux_credits = credits;
		let aux_grades = grades;

		aux_credits.pop();
		aux_grades.pop();

		setCredits(aux_credits);
		setGrades(aux_grades);
	}

	function createInputs() {
		//hello
	}
	return (
		<div className="text-center text-light mt-5">
			<h1>Hello! Here is a simple way to calculate the semester grade</h1>
			<div className="row d-flex justify-content-center">
				<div className="col-xl-6 col-lg-6 col-md-9 col-sm-12">
					<div>
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
				</div>
			</div>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-info">
				Calculate
			</a>
		</div>
	);
}
