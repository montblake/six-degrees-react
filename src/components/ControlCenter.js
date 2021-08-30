import Progress from "./CCProgress";

function ControlCenter(props) {
    return (
        <div id="control-center" className="structure-div">
            <Progress endpoint = {props.endpoint} progressArray={props.progressArray} />
           
        </div>
    )
}

export default ControlCenter;