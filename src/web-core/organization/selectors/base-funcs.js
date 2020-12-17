import { createSelector } from "reselect";

export const getOrganization = state => state.organization;

export const getOrganizationId = createSelector(
  getOrganization,
  organization => organization._id
);

export const getOrganizationName = createSelector(
  getOrganization,
  organization => organization.name
);
