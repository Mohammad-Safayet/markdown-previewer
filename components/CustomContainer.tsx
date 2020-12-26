import React from 'react'

import useCard from '../hooks/styles/useCard';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ContainerProps } from '../interfaces';

const CustomContainer = (props: ContainerProps) => {
    const classes = useCard();

    return (
        <Card
            className={classes.root}
            elevation={0}
        >
            <CardContent>
                <div className={classes.header}>
                    <Typography
                        className={classes.title}
                        variant="h5"
                        component="h2"
                        gutterBottom
                    >
                        {props.title}
                    </Typography>
                    <Divider className={classes.divider} />
                </div>
                {props.children}
            </CardContent>
        </Card>
    );
}

export default CustomContainer
