import React from 'react';

import { isEmpty } from 'lodash';

import { List, ListItem, ListItemText } from '@material-ui/core';

import InfoSection from '../../application/components/InfoSection';
import { navigateToUrl } from '../../application/utils/navigation';
import { UserRepository } from '../types';

const Organizations: React.FC<{
    isLoading: boolean;
    userRepositories: UserRepository[];
}> = ({ isLoading, userRepositories }) => (
    <InfoSection
        title="Repositories"
        isLoading={isLoading}
        isEmpty={!isLoading && isEmpty(userRepositories)}
        emptyText="No Repositories (Yet)"
    >
        <List>
            {userRepositories.map(repo => (
                <ListItem
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

export default Organizations;
