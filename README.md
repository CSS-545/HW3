# HW3 - Swanand Wagh

In React Native, as with any mobile development framework, it's essential to consider the various states an app can enter to ensure a smooth user experience and proper functionality.

1. **The various states that an app can enter on Android:**

   Android apps can transition through several states based on user interaction, system events, or app lifecycle events. These states are crucial to understanding how the React Native app behaves and how it should respond to each state change. Here are the primary states:

   - **Foreground**: This is the default state when the app is visible on the screen and actively being used by the user. the app should respond to user input and update its UI as necessary in this state.

   - **Background**: When the user switches to another app or the device's home screen, the app moves to the background state. It is still running but is not visible to the user. You should pause any ongoing activities that are not essential and be prepared for the possibility of being terminated by the system if resources are needed elsewhere.

   - **Inactive**: This state occurs when a dialog or another activity partially covers the app's window. It's still technically in the foreground but may not be actively interacted with by the user.

   - **Paused**: When the app loses focus but is still visible, it enters the paused state. This can happen, for example, when the user receives a phone call or switches to another app briefly. the app should pause any ongoing tasks that aren't critical and be prepared to resume them when it regains focus.

   - **Stopped**: In this state, the app is completely hidden and not visible to the user. It may happen when the user explicitly closes the app or when the system needs to free up resources. the app should release any resources it no longer needs and save its state if necessary to restore it later.

2. **The various states that you must consider for the app, why you must consider it, and what must happen in each state:**

   For a React Native app, it's crucial to consider how it behaves in different states to ensure a seamless user experience and prevent unexpected behavior or data loss. Here's what you should do in each state:

   - **Foreground**: Update the UI as necessary based on user input and ensure that all interactive elements respond correctly. Handle network requests, data fetching, and any background tasks that require user interaction.

   - **Background**: Pause or stop any ongoing tasks that are not critical for the app's operation to conserve system resources and battery life. Persist any unsaved data or application state to prevent data loss in case the app is terminated.

   - **Inactive**: Handle any interruptions gracefully, such as pausing video playback or suspending network requests. Be prepared to resume normal operation once the interruption is resolved.

   - **Paused**: Pause ongoing tasks and release any resources that are not immediately needed to free up memory and CPU usage. Save the current application state to restore it later when the app resumes.

   - **Stopped**: Clean up any resources, unregister event listeners, and save application state before the app is terminated. Handle any necessary cleanup tasks to ensure a smooth restart when the user relaunches the app.

By considering these states and implementing appropriate lifecycle methods and event listeners in the React Native app, you can ensure that it behaves predictably and maintains a consistent user experience across different Android devices and usage scenarios.
