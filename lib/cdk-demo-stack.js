"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkDemoStack = void 0;
const cdk = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
const ec2 = require("aws-cdk-lib/aws-ec2");
class CdkDemoStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        // example resource
        // const queue = new sqs.Queue(this, 'CdkDemoQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
        // We have created the VPC object from the VPC class
        new ec2.Vpc(this, 'mainVPC', {
            // This is where you can define how many AZs you want to use
            maxAzs: 2,
            // This is where you can define the subnet configuration per AZ
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: 'public-subnet',
                    subnetType: ec2.SubnetType.PUBLIC,
                }
            ]
        });
    }
}
exports.CdkDemoStack = CdkDemoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRlbW8tc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZGVtby1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMsOENBQThDO0FBQzlDLDJDQUEyQztBQUUzQyxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN6QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDZDQUE2QztRQUU3QyxtQkFBbUI7UUFDbkIsc0RBQXNEO1FBQ3RELGlEQUFpRDtRQUNqRCxNQUFNO1FBRU4sb0RBQW9EO1FBQ3BELElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzNCLDREQUE0RDtZQUM1RCxNQUFNLEVBQUUsQ0FBQztZQUNULCtEQUErRDtZQUMvRCxtQkFBbUIsRUFBRTtnQkFDakI7b0JBQ0UsUUFBUSxFQUFFLEVBQUU7b0JBQ1osSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU07aUJBQ2xDO2FBQ0o7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUF6QkQsb0NBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zcXMnO1xuaW1wb3J0ICogYXMgZWMyIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lYzInO1xuXG5leHBvcnQgY2xhc3MgQ2RrRGVtb1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gVGhlIGNvZGUgdGhhdCBkZWZpbmVzIHlvdXIgc3RhY2sgZ29lcyBoZXJlXG5cbiAgICAvLyBleGFtcGxlIHJlc291cmNlXG4gICAgLy8gY29uc3QgcXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsICdDZGtEZW1vUXVldWUnLCB7XG4gICAgLy8gICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKVxuICAgIC8vIH0pO1xuXG4gICAgLy8gV2UgaGF2ZSBjcmVhdGVkIHRoZSBWUEMgb2JqZWN0IGZyb20gdGhlIFZQQyBjbGFzc1xuICAgIG5ldyBlYzIuVnBjKHRoaXMsICdtYWluVlBDJywge1xuICAgICAgLy8gVGhpcyBpcyB3aGVyZSB5b3UgY2FuIGRlZmluZSBob3cgbWFueSBBWnMgeW91IHdhbnQgdG8gdXNlXG4gICAgICBtYXhBenM6IDIsXG4gICAgICAvLyBUaGlzIGlzIHdoZXJlIHlvdSBjYW4gZGVmaW5lIHRoZSBzdWJuZXQgY29uZmlndXJhdGlvbiBwZXIgQVpcbiAgICAgIHN1Ym5ldENvbmZpZ3VyYXRpb246IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaWRyTWFzazogMjQsXG4gICAgICAgICAgICBuYW1lOiAncHVibGljLXN1Ym5ldCcsXG4gICAgICAgICAgICBzdWJuZXRUeXBlOiBlYzIuU3VibmV0VHlwZS5QVUJMSUMsXG4gICAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9XG59XG4iXX0=