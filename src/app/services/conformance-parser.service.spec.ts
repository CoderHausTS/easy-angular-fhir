import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { ConformanceParserService } from './conformance-parser.service';
import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FhirRequestService } from './fhir-request.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConformanceParserService', () => {
  const mockBaseURL = 'https://mock.mock.mock/';
  const mockConformanceData = {
    data: {
      resourceType: 'Conformance',
      url: mockBaseURL + 'Argonaut/api/FHIR/DSTU2/Conformance/',
      version: '123',
      copyright: 'Copyright Mock 2020',
      status: 'active',
      experimental: true,
      date: new Date(),
      fhirVersion: '1.0.2',
      acceptUnknown: 'no',
      format: ['xml', 'json'],
      id: '11111',
      kind: 'instance',
      software: {
        name: 'Mock 2020',
        version: '1',
        releaseDate: new Date(),
      },
      rest: [
        {
          mode: 'server',
          security: {
            cors: true,
            service: [
              {
                text: 'OAuth',
                coding: [
                  {
                    system:
                      'http://hl7.org/fhir/ValueSet/restful-security-service',
                    code: 'OAuth',
                    display: 'OAuth',
                  },
                ],
              },
              {
                text: 'SMART-on-FHIR',
                coding: [
                  {
                    system:
                      'http://hl7.org/fhir/ValueSet/restful-security-service',
                    code: 'SMART-on-FHIR',
                    display: 'SMART-on-FHIR',
                  },
                ],
              },
              {
                text: 'Basic',
                coding: [
                  {
                    system:
                      'http://hl7.org/fhir/ValueSet/restful-security-service',
                    code: 'Basic',
                    display: 'Basic',
                  },
                ],
              },
            ],
            extension: [
              {
                url:
                  'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
                extension: [
                  {
                    url: 'authorize',
                    valueUri: mockBaseURL + 'Argonaut/oauth2/authorize',
                  },
                  {
                    url: 'token',
                    valueUri: mockBaseURL + 'Argonaut/oauth2/token',
                  },
                ],
              },
            ],
          },
          resource: [
            {
              type: 'AllergyIntolerance',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for AllergyIntolerance resources using one or more server ids (equivalent to one or more Get /AllergyIntolerance/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for AllergyIntolerance resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for AllergyIntolerance resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'Appointment',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'create',
                },
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'Binary',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'CarePlan',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for CarePlan resources using one or more server ids (equivalent to one or more Get /CarePlan/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for CarePlan resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for CarePlan resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'Condition',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for Condition resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Condition resources using one or more server ids (equivalent to one or more Get /Condition/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'clinicalStatus',
                  type: 'token',
                  documentation:
                    'Refine a search for Condition resources by clinicalStatus. By default, the search returns active Condition resources. Only clinical statuses of resolved and active are supported.',
                },
                {
                  name: 'category',
                  type: 'token',
                  documentation:
                    'Refine a search for Condition resources by category. Only diagnosis and health-concern categories are supported.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for Condition resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'Conformance',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'Device',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Device resources using one or more server ids (equivalent to one or more Get /Device/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for Device resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'type',
                  type: 'token',
                  documentation:
                    'Refine a search for Device resources by device type.',
                },
                {
                  name: 'udi',
                  type: 'string',
                  documentation:
                    'Refine a search for Device resources by one or more FDA-mandated Universal Device Identifiers (UDI).',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for Device resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'DiagnosticReport',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for DiagnosticReport resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for DiagnosticReport resources using one or more server ids (equivalent to one or more Get /DiagnosticReport/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for DiagnosticReport resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'date',
                  type: 'date',
                  documentation:
                    'Refine a search for DiagnosticReport resources by specifying a date or date range that a DiagnosticReport was resulted or recorded.  Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included.',
                },
              ],
            },
            {
              type: 'DocumentReference',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for DocumentReference resources using one or more server ids (equivalent to one or more Get /DocumentReference/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for DocumentReference resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for DocumentReference resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'period',
                  type: 'date',
                  documentation:
                    'Refine a search for DocumentReference resources by specifying a date or date range for the DocumentReference content. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included.',
                },
                {
                  name: 'class',
                  type: 'token',
                  documentation:
                    'Refine a search for DocumentReference resources by document class.',
                },
              ],
            },
            {
              type: 'FamilyMemberHistory',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for FamilyMemberHistory resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for FamilyMemberHistory resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'Goal',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Goal resources using one or more server ids (equivalent to one or more Get /Goal/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'category',
                  type: 'token',
                  documentation:
                    'Refine a search for Goal resources by category.',
                },
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for Goal resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'status',
                  type: 'token',
                  documentation:
                    'Refine a search for Goal resources by one or more statuses. By default, only in-progress goals are returned. Only in-progress, achieved, or cancelled statuses are supported.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for Goal resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'Immunization',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Immunization resources using one or more server ids (equivalent to one or more Get /Immunization/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'date',
                  type: 'date',
                  documentation:
                    'Refine a search for Immunization resources by specifying a date or date range that an Immunization was resulted or recorded.  Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included.',
                },
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for Immunization resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'status',
                  type: 'token',
                  documentation:
                    'Refine a search for Immunization resources by one or more administration statuses. By default, given and deferred immunizations are returned. Given, deferred, deleted, and incomplete statuses are supported.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for Immunization resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'List',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'Location',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'Medication',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Medication resources using one or more server ids (equivalent to one or more Get /Medication/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
              ],
            },
            {
              type: 'MedicationOrder',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for MedicationOrder resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'status',
                  type: 'token',
                  documentation:
                    'Refine a search for MedicationOrder resources by one or more statuses. By default, only medications with active statuses are returned. MedicationOrder searches support completed and discontinued statuses, but the search must also include the active status.',
                },
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for MedicationOrder resources using one or more server ids (equivalent to one or more Get /MedicationOrder/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for MedicationOrder resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
              ],
            },
            {
              type: 'MedicationStatement',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for MedicationStatement resources for a specified patient ID.',
                },
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for MedicationStatement resources using one or more server ids (equivalent to one or more Get /MedicationStatement/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'status',
                  type: 'token',
                  documentation:
                    'Refine a search for MedicationStatement resources by one or more statuses. By default, only medications with active statuses are returned. MedicationStatement searches support completed and intended statuses, but the search must also include the active status.',
                },
              ],
            },
            {
              type: 'Observation',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: 'code',
                  type: 'token',
                  documentation:
                    'Refine a search for Observation resources by LOINC code.',
                },
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Observation resources using one or more server ids (equivalent to one or more Get /Observation/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'date',
                  type: 'date',
                  documentation:
                    'Refine a search for Observation resources by specifying a date or date range that a result- or vital sign-based Observation was resulted or recorded. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included.',
                },
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for Observation resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for Observation resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'issued',
                  type: 'date',
                  documentation:
                    'Refine a search for smoking history Observation resources by specifying a date or date range that an Observation was recorded. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included.',
                },
                {
                  name: 'category',
                  type: 'token',
                  documentation:
                    'Refine a search for Observation resources by category. Only laboratory, vital-signs, and social-history are supported.',
                },
              ],
            },
            {
              type: 'Patient',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Patient resources using one or more server ids (equivalent to one or more Get /Patient/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'identifier',
                  type: 'token',
                  documentation:
                    "Search for Patient resources by a patient's identifier. You can use the identifier parameter as the only parameter in a search or in conjunction with other parameters. Queries must be in the format [OID]|[ID], where [OID] is the HL7 root of the identifier type. You can find this value in the Identifier.System field of a resource.  If the query doesn't include an OID, the system searches over all patient identifier types.",
                },
                {
                  name: 'family',
                  type: 'string',
                  documentation:
                    'Search for Patient resources by family (last) name. You can use the family parameter along with the given (name) parameter to search by a patient\'s name or in conjunction with the birthdate parameter. Family name searching supports exact matching, "sounds like" matching, and patient aliases.',
                },
                {
                  name: 'given',
                  type: 'string',
                  documentation:
                    'Search for Patient resources by given (first) name.  You must use the given parameter along with the family (name) parameter to search by a patient\'s name. Given name searching supports both exact and "sounds like" matches.  Patient aliases and dominant name aliases (ex. Bob for Robert) are also supported.',
                },
                {
                  name: 'birthdate',
                  type: 'date',
                  documentation:
                    'Search for Patient resources using a date of birth in ISO format (YYYY-MM-DD). You must use this parameter with at least one other search parameter (excluding given and gender).',
                },
                {
                  name: 'address',
                  type: 'string',
                  documentation:
                    'Search for Patient resources using an address string. You must use this parameter with one of the following parameters: identifier, telecom, family and given, or birthdate.',
                },
                {
                  name: 'gender',
                  type: 'token',
                  documentation:
                    'Search for Patient resources using the following gender codes: female, male, other, or unknown.  You must use this parameter with one of the following sets of parameters: identifier, telecom, or family and given. Setting this parameter will filter results.',
                },
                {
                  name: 'telecom',
                  type: 'string',
                  documentation:
                    'Search for Patient resources using a patient’s home, cell phone number, or email address.  You can use this parameter as the only parameter in a search if it is set to a phone number.  If an email address is entered, you must use this parameter with one of the following parameters: identifier, family and given, or birthdate. Queries can be formatted with or without dashes.',
                },
              ],
            },
            {
              type: 'Practitioner',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'Procedure',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
                {
                  code: 'search-type',
                },
              ],
              searchParam: [
                {
                  name: 'patient',
                  type: 'reference',
                  documentation:
                    'Search for Procedure resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: 'subject',
                  type: 'reference',
                  documentation:
                    'Search for Procedure resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references.',
                },
                {
                  name: '_id',
                  type: 'token',
                  documentation:
                    'Search for Procedure resources using one or more server ids (equivalent to one or more Get /Procedure/{ID} requests). If _id is included in your search, all other parameters are ignored.',
                },
                {
                  name: 'date',
                  type: 'date',
                  documentation:
                    'Refine a search for Procedure resources by specifying a date or date range that a Procedure was resulted. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included.',
                },
              ],
            },
            {
              type: 'ProcedureRequest',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'Schedule',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
            {
              type: 'Slot',
              readHistory: false,
              updateCreate: false,
              conditionalCreate: false,
              conditionalUpdate: false,
              conditionalDelete: 'not-supported',
              interaction: [
                {
                  code: 'read',
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const expectedSecurityServices = ['OAuth', 'SMART-on-FHIR', 'Basic'];
  const expectedAuthorizationURL = mockBaseURL + 'Argonaut/oauth2/authorize';
  const expectedTokenURL = mockBaseURL + 'Argonaut/oauth2/token';
  const expectedResources = [
    'AllergyIntolerance',
    'Appointment',
    'Binary',
    'CarePlan',
    'Condition',
    'Conformance',
    'Device',
    'DiagnosticReport',
    'DocumentReference',
    'FamilyMemberHistory',
    'Goal',
    'Immunization',
    'List',
    'Location',
    'Medication',
    'MedicationOrder',
    'MedicationStatement',
    'Observation',
    'Patient',
    'Practitioner',
    'Procedure',
    'ProcedureRequest',
    'Schedule',
    'Slot',
  ];

  // this will hold our fhir request service spy later
  // let fhirReqService: jasmine.SpyObj<FhirRequestService>;
  let service: ConformanceParserService;

  // we'll use this to actually get our FHIR data
  // let getConfStatementSpy;
  let fhirRequestSpy;

  beforeEach(() => {
    // here's our spy!
    fhirRequestSpy = jasmine.createSpyObj('FhirRequestService', [
      'getConformanceStatement',
    ]);

    // and how we will return data
    fhirRequestSpy.getConformanceStatement.and.returnValue(
      of(mockConformanceData)
    );

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: FhirRequestService, useValue: fhirRequestSpy }],
    });
  });

  beforeEach(() => {
    service = TestBed.get(ConformanceParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the proper data URL', () => {
    expect(service.getUrl()).toEqual(mockConformanceData.data.url);
  });

  it('should return the proper FHIR version', () => {
    expect(service.getFhirVersion()).toEqual(
      mockConformanceData.data.fhirVersion
    );
  });

  it('should return the proper EHR software version information', () => {
    const versionObject = {
      name: mockConformanceData.data.software.name,
      version: mockConformanceData.data.software.version,
      releaseDate: mockConformanceData.data.software.releaseDate,
    };

    expect(service.getSoftwareInformation()).toEqual(versionObject);
  });

  it('should return the proper security services', () => {
    expect(service.getSecurityServices()).toEqual(expectedSecurityServices);
  });

  it('should return the proper Authorization URL', () => {
    expect(service.getAuthorizationURL()).toEqual(expectedAuthorizationURL);
  });

  it('should return the proper Token URL', () => {
    expect(service.getTokenURL()).toEqual(expectedTokenURL);
  });

  it('should return the list of available resources', () => {
    expect(service.getAvailableResources()).toEqual(expectedResources);
  });
});
