<h2 class="article-title">Usefull Linux Commands.</h2>

# 1. List directory contents.

```bash
ls -lah
```
* l :  use a long listing format
* a :  do not ignore entries starting with .
* h : print human readable sizes
___
# 2. Remove files or directories

```bash
rm file # remove a file
rm -rf directory
```
* f : ignore nonexistent files and arguments, never prompt
* r :  remove directories and their contents recursively
# 3. Print real and effective user and group IDs

```bash
id -u # 1000 print only the effective user ID
id -g # 100 print only the effective group ID
```
# 4. The non-interactive network downloader.

```bash
wget url
wget -t=10 http://fly.srk.fer.hr/ -P downloads
```
* P : folder when wget download the content pf the URL
* t :  number of tries 

# 5. Archiving utility
A Linux tarball (“tar.gz” or “tar.bz2” file ) is nothing but a system file format that combines and compresses multiple files.

```bash
tar -cf archive.tar foo bar  # Create archive.tar from files foo and bar.
tar -tvf archive.tar         # List all files in archive.tar verbosely.
tar -xf archive.tar          # Extract all files from archive.tar.
```

```bash
tar -xvzf file.gz
```
* x : Extract files from an archive, When given, they  specify  names  of  the  archive  members  to  be extracted.
* z : Filter the archive through gzip
* v : Verbosely list files processed.
* f : Use archive  file  or device ARCHIVE.
* c : create a new archive
* t : list the contents of an archive

One can use bzip2 compression instead of gzip by passing the -j option to the tar command:
```bash
tar -cjvf file.tar.bz2 /path/to/dir
```
* j : Filter the archive through bzip2

# 7. Move and Rename files

```bash
mv file1 file2 #rename file1 file2
mv file dir # move file to dir
```

# 8. Search for files in a directory hierarchy

```bash
find . -type d -name "dir_name"
```
Find in the current dirctory all dirctories with name `dir_name`

```bash
find Demo -type f -iname "*.py"
```

Find all files in Demo diectory with extension py.

```bash
find . -type f -mmin 10
``` 
Find all files which modified last 10 min ago.

```bash
find -type f -mmin +1 -mmin -5
```
Find all files which modified more than 1 min and less than 5 min

```bash
find . -size +5M
```
Find all files with size greater than 5 Migabytes

```bash
find . -perm 777
```
Find all files with permission is 777

```bash
find . -type f -name "*.jpg" -maxdepth 1
```
Find all images of type `jpg` in the current dirctory and not in subdirctories

```bash
find . -type f -name "*.pyc" -maxdepth 1 -exec rm {} \;
```
Find all files with extension `pyc` and delete them.

```bash
find . -type d -empty
```
Find all empty folders in current dirctory.

```bash
find build -name "*.js" ! -path "./build/external/*"
find build -name "*.js" -not \( -path "./build/external/*" -prune \)
```
Find all js files in build dirctory excluding the `build/external` dirctory.

```bash
find . -name "*.js" ! -path "./test1/*" ! -path "./test2/*"
```
Find js files in the current diectory except the test1 and test2 folders.

# 9. SystemD commands

```bash
sudo systemctl list-units|egrep .service # list all services
sudo systemctl list-units-files t#show all installed unit file
sudo systemctl list-units --failed #show all failed services
sudo systemctl restart ssh.service  #Stop and then start one or more units specified on the command line. If the units are not running yet, they will be started.
sudo systemctl start ssh # start a unit
sudo systemctl enable ssh # start a service every time the server turn on.
sudo systemctl reload ssh #Asks all units listed on the command line to reload their configuration.
sudo systemctl status ssh # status of a service
```
# 10. Query the systemd journal: `journalctl`

```bash
journalctl -a
journalctl -f
journalctl -n
```
* a : Show all fields in full, even if they include unprintable characters or are very long.

* f : Show only the most recent journal entries, and continuously print new entries as they are appended to the journal.

* n : Show the most recent journal events and limit the number of events shown.

# 11. Output the last part of files : `tail`

```bash
tail -f -n=30 file.log
```
* f : output appended data as the file grows;
* n : output the last 30 lines,

# 12. Network Statisitics

Netstat is an indispensable tool that shows you all of the network connections on an endpoint. 

```bash
sudo netstat -anptu # without sudo the program name does not appear.
```
* a : Show both listening and non-listening sockets.
* n : Show numerical addresses instead of trying to determine symbolic host, port or user names.
* p, --program : Show the PID and name of the program to which each socket belongs.
* t, --tcp : show tcp connections.
* u, --udp : show udp connections.
```bash
netstat --inet -npl
```
* i : Display a table of all network interfaces.
* l :  Show only listening sockets.  (These are omitted by default.)

- If the source address is 0.0.0.0, it is listening on all available interfaces.
- The Recv-Q and Send-Q fields show the number of bytes pending acknowledgment in either direction.