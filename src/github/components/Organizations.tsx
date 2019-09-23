import React from 'react';

import { isEmpty } from 'lodash';

import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

import InfoSection from '../../application/components/InfoSection';
import { navigateToUrl } from '../../application/utils/navigation';
import { UserOrganization } from '../types';

const useStyles = makeStyles(_ => ({
    listItem: {
        overflow: 'hidden',
    },
}));

const Organizations: React.FC<{
    isLoading: boolean;
    userOrganizations: UserOrganization[];
}> = ({ isLoading, userOrganizations }) => {
    const classes = useStyles();
    return (
        <InfoSection
            title="Organizations"
            isLoading={isLoading}
            isEmpty={!isLoading && isEmpty(userOrganizations)}
            emptyText="No Organizations (Yet)"
        >
            <List>
                {userOrganizations.map(org => (
                    <ListItem
                        className={classes.listItem}
                        key={org.id}
                        button
                        onClick={() => navigateToUrl(org.url)}
                    >
                        <ListItemText primary={org.login} />
                    </ListItem>
                ))}
            </List>
        </InfoSection>
    );
};

export default Organizations;
