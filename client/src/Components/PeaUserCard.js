import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import PeaAvatar from './PeaAvatar';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
// import PeaButton from './PeaButton';
// import PeaText from './PeaTypography';
// import PeaIcon from './PeaIcon';

const PeaUserCard = ({
    name,
    tag,
    location,
    bio,
    cover,
    //   image,
    //   AvatarProps,
}) => (
        <Card className={'PeaUserCard-root'}>
            <CardMedia className={'MuiCardMedia-root'} image={cover} style={{ height: "150px" }}>

            </CardMedia>
            {/* <PeaAvatar src={image} size={'huge'} {...AvatarProps} /> */}
            <CardContent className={'MuiCardContent-root'}>
                <Box mb={2}>
                    <Typography weight={'bold'} color={'textPrimary'}>
                        {name}
                    </Typography>
                    <Typography variant={'body2'} gutterBottom>
                        {tag}
                    </Typography>
                </Box>
                <Typography>
                    <Icon
                        size={'small'}
                        color={'secondary'}
                        icon={'location_on'}
                        push={'right'}
                    >location_on</Icon>
                    {location}
                </Typography>
                <Typography>
                    <Icon
                        size={'small'}
                        color={'secondary'}
                        icon={'info'}
                        push={'right'}
                    >info</Icon>
                    {bio}
                </Typography>
            </CardContent>
        </Card>
    );

PeaUserCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string,
    cover: PropTypes.string,
    AvatarProps: PropTypes.shape({}),
};
PeaUserCard.defaultProps = {
    bio: '',
    cover: '',
    AvatarProps: {},
};
PeaUserCard.metadata = {
    name: 'Pea User Card',
};
PeaUserCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaUserCard;