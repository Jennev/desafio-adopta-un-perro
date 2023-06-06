import Badge from "react-bootstrap/Badge";

const Tags = ({ text, color }) => {
    return (
        <h6 className="text-center mx auto">
            <Badge style={{width: "150px" }} bg={color}>
                {text}
            </Badge>
        </h6>        
    )
}

export default Tags