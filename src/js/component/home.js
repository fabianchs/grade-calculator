import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center text-light mt-5">
			<h1>Hello! Here is a simple way t o calculate the semester grade</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				Calculate
			</a>
		</div>
	);
}
