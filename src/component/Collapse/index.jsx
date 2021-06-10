import PropTypes from "prop-types";
import React from "react";

class Collapse extends React.Component {
	constructor(){
		super();
		this.state={
			showContent:true
		};
		//this.showMore=this.showMore.bind(this);
		//showMore function this olaraq artiq burdaki thisi qebul edecek
	
	}
	//showMore(){
	//	this.setState({showContent:true})
	//}
	showMore=()=>{
		//(this.state.showContent)?
		//this.setState({showContent:false}):this.setState({showContent:true})
		this.setState({
			showContent: !this.state.showContent
		})

	}
	componentDidMount(){
		console.log("compenent yaradildi")
	}
	componentDidUpdate(){
		console.log("update olundu")
	}


	render() {
		const {children}=this.props;
		return (
			<div >
				<p>
					<button className="btn btn-primary w-100" type="button" onClick={this.showMore}>
						{/*{children.props.title}*/}
						
						{React.Children.map(children, child => child.props.title)}
					</button>
				</p>
				{
					(this.state.showContent)?
					(<div className="collapse show" >
					{children}</div>): null
				}
				
			</div>
		);
	}

};
Collapse.propTypes = {
	id: PropTypes.string,
	children: PropTypes.oneOfType([ PropTypes.element, PropTypes.array]),
	cardNumber: PropTypes.string
}
export default Collapse;