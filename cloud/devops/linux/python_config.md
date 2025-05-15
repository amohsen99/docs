✅ Conclusion: Changing the Default Python Version on Ubuntu
We successfully changed the default Python interpreter using the update-alternatives system. The following changes were made:

python command now points to Python 3.10, selected via:

bash
Copy
Edit
sudo update-alternatives --config python
The python3 command remains on Python 3.12, which is Ubuntu's default. If needed, it can also be managed using:

bash
Copy
Edit
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 2
sudo update-alternatives --config python3
This setup ensures flexibility in switching between multiple Python versions without disrupting system-wide configurations.

Let me know if you want this formatted as a Markdown .md file or shell script for reuse.