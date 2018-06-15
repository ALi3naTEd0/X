@ECHO ON
FOR %%A IN (*.flac) DO "python" "C:\mqaid-master\is_mqa.py" "%%A"
@PAUSE