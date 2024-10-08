import {
  CounsellingSession,
  CounsellingStatus,
  PaginationReq,
} from '@sjfl/data';

export type AdminCounsellingSession = CounsellingSession & {
  userResponse: UserResponse;
};

export interface UserResponse {
  uid: string;
  name: string;
  gender: string;
  dateOfBirth: string;
  mobileNumber: string;
  email: string;
  imageUrl: string;
  createdAt: string;
}

export type FetchCounsellingSessionsAdminRequest = {
  type: 'all' | 'today' | 'search';
  fromDate: string;
  toDate: string;
  name: string;
  uid: string;
  counsellingStatuses: CounsellingStatus;
} & PaginationReq;

export type UpdateCounsellingSessionAdminRequest = Partial<
  Pick<
    AdminCounsellingSession,
    'counsellingDate' | 'note' | 'statusNote' | 'counsellingStatus'
  >
>;
