import PropTypes from "prop-types";
const Card = ({title="",image, cardText=""}) => {
	return (
		<div className="card w-100">
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{cardText}</p>
				<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
			</div>
		</div>
	);
};
Card.propTypes={
	title:PropTypes.string
}
export default Card;