# Console-Disabled Route Group

Purpose: enforce App-side exclusion of Console-only features.

This route group documents and protects the separation between the OneGodian App and the OneGodian Console.

The following systems must not exist inside the public/member-facing App:

- ACC
- agent administration
- OCP
- OEG
- workflow execution controls
- approvals
- audit mutation
- adapters
- internal logs
- deployment controls
- kill-switch controls

These belong exclusively to:

https://console.onegodian.com

Rule:

App = experience.
Console = control.
