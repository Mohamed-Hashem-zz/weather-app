import React from "react";
import "./Background.css";
import $ from "jquery";

export default function Background() {
	$(document).ready(function () {
		$("#1b").hover(
			function () {
				$("#2b").addClass("blur");
			},
			function () {
				$("#2b").removeClass("blur");
			}
		);

		$("#2b").hover(
			function () {
				$("#1b").addClass("blur");
			},
			function () {
				$("#1b").removeClass("blur");
			}
		);
	});

	return (
		<>
			<div className="main-wrapper">
				<div className="box-main-wrapper">
					<div id="1b" className="bgcolor-1 box-main"></div>
					<div id="2b" className="bgcolor-2 box-main"></div>
				</div>
			</div>
		</>
	);
}
