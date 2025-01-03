import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GeneralContext } from '../contexts/GeneralContext';
import { Box, CircularProgress, Tab, Tabs } from '@mui/material';
import Form from '../components/Form';

import {
  generalUiSchema,
  homepageUiSchema,
  profileUiSchema
} from '../components/ui/Preferences.uiSchema';
import {
  PreferencesJSON,
  ProfileJSON,
  ProfileSchema,
  UrlJSON
} from '@jakubkanna/labguy-front-schema';
import { RJSFSchema } from '@rjsf/utils';
import { JSONSchema7 } from 'json-schema';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function Preferences() {
  //init
  const [value, setValue] = useState(0);
  const { preferences, setPreferences } = useContext(GeneralContext);
  const loaderData = useLoaderData() as ProfileSchema;
  const [profile, setProfile] = useState<ProfileSchema | undefined>(loaderData);

  if (!preferences) return <CircularProgress />;

  const typedPreferences = PreferencesJSON as JSONSchema7;
  const typedUrl = UrlJSON as JSONSchema7;

  //schemas
  const preferencesSchema: RJSFSchema = {
    ...typedPreferences,
    properties: {
      ...typedPreferences.properties,
      homepage_urls: {
        type: 'array',
        items: typedUrl
      }
    }
  };

  const profileSchema: ProfileSchema = ProfileJSON;

  //endpoints
  const preferencesEndpoint = {
    path: 'preferences',
    id: preferences.id as number
  };
  const profileEndpoint = { path: 'profile', id: preferences.id as number };

  //handlers
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="tabs">
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Homepage" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Form
          data={preferences}
          schema={preferencesSchema}
          uiSchema={generalUiSchema}
          endpoint={preferencesEndpoint}
          setState={setPreferences}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Form
          data={preferences}
          schema={preferencesSchema}
          uiSchema={homepageUiSchema}
          endpoint={preferencesEndpoint}
          setState={setPreferences}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Form
          data={profile}
          uiSchema={profileUiSchema}
          schema={profileSchema}
          endpoint={profileEndpoint}
          setState={setProfile}
        />
      </CustomTabPanel>
    </Box>
  );
}
