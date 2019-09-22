import React from 'react';

import { isEmpty } from 'lodash';

import { List, ListItem, ListItemText } from '@material-ui/core';

import InfoSection from '../../application/components/InfoSection';
import { navigateToUrl } from '../../application/utils/navigation';
import { UserOrganization } from '../types';

const Organizations: React.FC<{
    isLoading: boolean;
    userOrganizations: UserOrganization[];
}> = ({ isLoading, userOrganizations }) => (
    <InfoSection
        title="Organizations"
        isLoading={isLoading}
        isEmpty={!isLoading && isEmpty(userOrganizations)}
        emptyText="No Organizations (Yet)"
    >
        <List>
            {userOrganizations.map(org => (
                <ListItem
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

export default Organizations;
