#!/bin/bash
# Fix for apt_pkg module error by using Python 3.10 explicitly

echo "Checking if Python 3.10 is properly installed..."
if ! command -v python3.10 &> /dev/null; then
    echo "Python 3.10 not found. Please ensure it's properly installed."
    exit 1
fi

echo "Modifying cnf-update-db script to use Python 3.10 explicitly..."
sudo cp /usr/lib/cnf-update-db /usr/lib/cnf-update-db.backup
sudo sed -i '1s|^#!.*python.*|#!/usr/bin/python3.10|' /usr/lib/cnf-update-db

# Remove any previous workarounds
echo "Removing previous workarounds..."
if [ -f /etc/apt/apt.conf.d/99disable-cnf-update-db ]; then
    sudo rm /etc/apt/apt.conf.d/99disable-cnf-update-db
fi

# Run update to verify the fix
echo "Running apt update to verify the fix..."
sudo apt update

echo "If no errors appeared, the fix was successful!"
