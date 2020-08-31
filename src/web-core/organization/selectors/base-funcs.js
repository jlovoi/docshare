import { createSelector } from "reselect";

export const getOrganization = state => state.organization;

export const getOrganizationName = createSelector(
  getOrganization,
  organization => organization.name
);
