import React from 'react';

import { isEmpty } from 'lodash';

import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

import InfoSection from '../../application/components/InfoSection';
import { navigateToUrl } from '../../application/utils/navigation';
import { UserRepository } from '../types';

const useStyles = makeStyles(_ => ({
    listItem: {
        overflow: 'hidden',
    },
}));

const Organizations: React.FC<{
    isLoading: boolean;
    userRepositories: UserRepository[];
}> = ({ isLoading, userRepositories }) => {
    const classes = useStyles();
    return (
        <InfoSection
            title="Repositories"
            isLoading={isLoading}
            isEmpty={!isLoading && isEmpty(userRepositories)}
            emptyText="No Repositories (Yet)"
        >
            <List>
                {userRepositories.map(repo => (
                    <ListItem
                        className={classes.listItem}
                        key={repo.id}
                        button
                        onClick={() => navigateToUrl(repo.html_url)}
                    >
                        <ListItemText primary={repo.full_name} />
                    </ListItem>
                ))}
            </List>
        </InfoSection>
    );
};

export default Organizations;
