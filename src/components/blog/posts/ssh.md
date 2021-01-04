<h2 class="mt-2 rounded shadow-lg p-3 text-primary text-center">
What is SSH, How it's work, How we can use it and How to secure a open SSH connection?
</h2>

## table of content : 
  - [table of content :](#table-of-content-)
  - [0. Inroduction :](#0-inroduction-)
  - [1. How does SSH Work?](#1-how-does-ssh-work)
  - [3. Installation of  SSH](#3-installation-of-ssh)
  - [4. How to Open SSH Connection?](#4-how-to-open-ssh-connection)
  - [5. How to Secure an Open SSH Connection?](#5-how-to-secure-an-open-ssh-connection)

## 0. Inroduction :

Accessing to machines remotely became a necessity a   long time ago and we can barely imagine how it would be if couldn't control computers from remote locations.
    
There are many ways to establish a connection with a 
remote machine depending on the operating system you are running, but the two most used protocols are:
- Secure Shell (SSH) for Linux-based machines
- remote Desktop Protocol (RDP) for Windows-based machines.

The two protocols use the client and server applications to establish a remote connection.
In this post we will talk about SSH Protocol.

[SSH](https://en.wikipedia.org/wiki/Ssh_(Secure_Shell))  is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line, login, and remote command execution, but any network service can be secured with SSH.


## 1. How does SSH Work?

To open a connection you need a client who makes the requests and a server who listen to a requests maded by the client. 

1. **SSH client** : is an application you install on the computer which you will use to connect to another computer or server.
2. **SSH server** the corresponding server-side component which there is a componenet called an SSH daemon that is constantly listeninig to a specific TCP/IP port for possible client connection requests.


You need the IP address or the name of the remote machine you want to connect to.

### 3. Installation of  SSH
An open source SSH tool—widely used for Linux distributions— is OpenSSH.
On the client side you need the openssh-client to open aconnection :
```bash
sudo apt-get install openssh-client
```

In order to accept SSH connections, a machine needs to have the server-side part of SSH software toolkit.

openssh-server : should be on the server side, (remote machine)
```bash
#install openssh server side 
sudo apt-get install openssh-server

#check is ssh is active !
sudo service ssh status
```
To get the IP of the machine :
```bash
ip addr show
```

### 4. How to Open SSH Connection?

When openssh client and server are both installed, and you have the user, paddword and the IP adress of the remote machine, use command this command to  open ssh connnection :  

```bash
ssh user@host -p port
```

1. The ssh key command instructs your system that you want to open an encrypted Secure Shell Connection.
2. user represents the account you want to access. For example, you may want to access the root user, which is basically synonymous for system administrator with complete rights to modify anything on the system.
3. host: refers to the computer you want to access. This can be an IP Address.

## 5. How to Secure an Open SSH Connection?
To secure an open ssh connection you need to edit the configuration file by this command : 

```bash
sudo vim /etc/ssh/sshd_config
```

- First of all, you need to use a ***random strong password***
- ***Use another port*** because the majority of hackers try the default port, to do so change the line below : 
    ```php
    port 5555
    ``` 
-  ***Disable empty password :*** (it's enabled by     
    default) by changing the line in configration  file by that :
    ```php
     PermitEmptyPasswords no
    ```
- ***Disable Root Logins :*** to avoid hackers to access to your system directly, to do change the line on configuration by that : 
  ```php
  PermitRootLogin no
  ```
- ***Use Public/Private  Keys for Authentication :*** because it's very secure than password mechanism and you won't need to enter a password anymore, the private key is stored on the client when the public key  is shared with the server.
  To generate a key-pair use the command : 
  ```bash
  ssh-keygen -t rsa -b 5000 -C "comment...an email used commonly"
  ```
  you will the be asked for passphrase, which is your password to unlock a given key each time you connect.
  Then make a open SSH connection the remote server, 
 make a dirctory called .ssh by this command : 
  ```bash
  mkdir -m 700 .ssh
  ```
  and copy the public key in file called `authorized_keys` in the floder `.ssh` 
  finaly set the permission to `authorized_keys` by this command :
  ```bash
  chmod 600 .ssh/authorized_keys
  ```
  the restart the ssh service by :

  ```
  sudo service ssh restart
  ```
- ***Disable Password Authentication :*** to forcing the use of the keys : 
     ```bash
     PasswordAuthentication no
     ```
   
