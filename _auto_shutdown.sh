#!/bin/bash

# Function to handle the shutdown confirmation
confirm_shutdown() {
    # Send desktop notification
    /usr/bin/notify-send -u critical "Scheduled Shutdown" "Your computer is scheduled to shut down in 1 minute. Open terminal to cancel."
    
    # Also log to file
    echo "Your computer is scheduled to shut down in 1 minute."
    echo "Press 'c' to cancel shutdown or any other key to shut down now."
    
    # Wait for user input with a 60-second timeout
    read -t 60 -n 1 response
    
    if [[ "$response" == "c" || "$response" == "C" ]]; then
        echo -e "\nShutdown canceled."
        /usr/bin/notify-send "Shutdown Canceled" "The scheduled shutdown has been canceled."
        exit 0
    else
        echo -e "\nShutting down now..."
        /usr/bin/notify-send -u critical "Shutting Down" "Your computer is shutting down now."
        sleep 3  # Give time for notification to be seen
        
        # Try to shutdown with sudo
        sudo /sbin/shutdown -h now
    fi
}

# Call the confirmation function
confirm_shutdown
