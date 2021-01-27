#linux

1. List directory contents.

```bash
ls -lah
```
* l :  use a long listing format
* a :  do not ignore entries starting with .
* h : print human readable sizes
___
2. Remove files or directories

```bash
rm -rf directory
```
* f : ignore nonexistent files and arguments, never prompt
* r :  remove directories and their contents recursively
3. Print real and effective user and group IDs

```bash
id -u # 1000 print only the effective user ID
id -g # 100 print only the effective group ID
```
4. The non-interactive network downloader.

```bash
wget url
wget -t=10 http://fly.srk.fer.hr/ -P downloads
```
* P : folder when wget download the content pf the URL
* t :  number of tries 

5. Archiving utility

```bash
tar -xvzf file.gz
```
* x : Extract files from an archive, When given, they  specify  names  of  the  archive  members  to  be extracted.
* z : Filter the archive through gzip
* v : Verbosely list files processed.
* f : Use  archive  file  or device ARCHIVE.

6. Output the last part of files

```bash
tail -f -n=30 file.log
```
* f : Output appended data as the file grows. 
* n : Output the last NUM lines.

7. Move and Rename files

```bash
mv file1 file2 #rename file1 file2
mv file dir # move file to dir
```

8. Search for files in a directory hierarchy

```bash
find . file.*
```