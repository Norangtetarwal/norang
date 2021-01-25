import React from 'react';
import {
    Card,
    CardBody,
    Badge
} from "reactstrap";
import iitg_logo from "../assets/img/icons/common/IITG_logo.png";

import { Fade } from 'react-reveal';

const EdutionCard = ({education}) => {
    return ( 
        <Fade right duration={1000} distance="40px">
            <Card className="card-lift--hover shadow mt-4">
                <CardBody>
                    {/*<img ref={iitg_logo} className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg " alt={""} />*/}
                    <div className="col-auto">
                        <img  src={iitg_logo} className=" bg-neutral rounded-circle mb-3 img-fluid shadow-lg " style={{ width: "70px" }}  alt="IITG"/>
                    </div>
                    
                    <div className="d-flex px-3">
                    <div className="pl-4">
                        <h5 className="text-info">
                        {education.schoolName}
                        </h5>
                        <h6>{education.subHeader}</h6>
                        <Badge color="info" className="mr-1">
                        {education.duration}
                    </Badge>
                        <p className="description mt-3">
                            {education.desc}
                            <ul>
                            {
                                education.descBullets ? 
                                education.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                        </p>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </Fade>
     );
}
 
export default EdutionCard;