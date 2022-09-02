#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const cdk_demo_stack_1 = require("../lib/cdk-demo-stack");
const app = new cdk.App();
new cdk_demo_stack_1.CdkDemoStack(app, 'CdkDemoStack', {
    /* If you don't specify 'env', this stack will be environment-agnostic.
     * Account/Region-dependent features and context lookups will not work,
     * but a single synthesized template can be deployed anywhere. */
    /* Uncomment the next line to specialize this stack for the AWS Account
     * and Region that are implied by the current CLI configuration. */
    // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
    /* Uncomment the next line if you know exactly what Account and Region you
     * want to deploy the stack to. */
    env: { account: '149362727767', region: 'eu-west-1' },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DLDBEQUFxRDtBQUVyRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLDZCQUFZLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRTtJQUNwQzs7cUVBRWlFO0lBRWpFO3VFQUNtRTtJQUNuRSw2RkFBNkY7SUFFN0Y7c0NBQ2tDO0lBQ2pDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtDQUd2RCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ2RrRGVtb1N0YWNrIH0gZnJvbSAnLi4vbGliL2Nkay1kZW1vLXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbm5ldyBDZGtEZW1vU3RhY2soYXBwLCAnQ2RrRGVtb1N0YWNrJywge1xuICAvKiBJZiB5b3UgZG9uJ3Qgc3BlY2lmeSAnZW52JywgdGhpcyBzdGFjayB3aWxsIGJlIGVudmlyb25tZW50LWFnbm9zdGljLlxuICAgKiBBY2NvdW50L1JlZ2lvbi1kZXBlbmRlbnQgZmVhdHVyZXMgYW5kIGNvbnRleHQgbG9va3VwcyB3aWxsIG5vdCB3b3JrLFxuICAgKiBidXQgYSBzaW5nbGUgc3ludGhlc2l6ZWQgdGVtcGxhdGUgY2FuIGJlIGRlcGxveWVkIGFueXdoZXJlLiAqL1xuXG4gIC8qIFVuY29tbWVudCB0aGUgbmV4dCBsaW5lIHRvIHNwZWNpYWxpemUgdGhpcyBzdGFjayBmb3IgdGhlIEFXUyBBY2NvdW50XG4gICAqIGFuZCBSZWdpb24gdGhhdCBhcmUgaW1wbGllZCBieSB0aGUgY3VycmVudCBDTEkgY29uZmlndXJhdGlvbi4gKi9cbiAgLy8gZW52OiB7IGFjY291bnQ6IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX0FDQ09VTlQsIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfUkVHSU9OIH0sXG5cbiAgLyogVW5jb21tZW50IHRoZSBuZXh0IGxpbmUgaWYgeW91IGtub3cgZXhhY3RseSB3aGF0IEFjY291bnQgYW5kIFJlZ2lvbiB5b3VcbiAgICogd2FudCB0byBkZXBsb3kgdGhlIHN0YWNrIHRvLiAqL1xuICAgZW52OiB7IGFjY291bnQ6ICcxNDkzNjI3Mjc3NjcnLCByZWdpb246ICdldS13ZXN0LTEnIH0sXG5cbiAgLyogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vY2RrL2xhdGVzdC9ndWlkZS9lbnZpcm9ubWVudHMuaHRtbCAqL1xufSk7Il19