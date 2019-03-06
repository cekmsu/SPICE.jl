var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api/#SPICE.SpiceCharCell",
    "page": "API",
    "title": "SPICE.SpiceCharCell",
    "category": "type",
    "text": "SpiceCharCell(size, length)\n\nCreate a SpiceCharCell that can contain up to size strings with length characters.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.SpiceDoubleCell",
    "page": "API",
    "title": "SPICE.SpiceDoubleCell",
    "category": "type",
    "text": "SpiceDoubleCell(size)\n\nCreate a SpiceDoubleCell that can contain up to size elements.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.SpiceIntCell",
    "page": "API",
    "title": "SPICE.SpiceIntCell",
    "category": "type",
    "text": "SpiceIntCell(size)\n\nCreate a SpiceIntCell that can contain up to size elements.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.append!-Tuple{SPICE.SpiceCell,Any}",
    "page": "API",
    "title": "Base.append!",
    "category": "method",
    "text": "append!(cell, collection)\n\nAppend all items from collection to the char/double/integer SpiceCell cell.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.copy-Union{Tuple{SpiceCell{T,T1,N} where N where T1}, Tuple{T}} where T",
    "page": "API",
    "title": "Base.copy",
    "category": "method",
    "text": "copy(cell::SpiceCell)\n\nDuplicate the SpiceCell cell.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.diff-Union{Tuple{T}, Tuple{SpiceCell{T,T1,N} where N where T1,SpiceCell{T,T1,N} where N where T1}} where T",
    "page": "API",
    "title": "Base.diff",
    "category": "method",
    "text": "diff(a::T, b::T) where T <: SpiceCell\n\nCompute the difference of two sets of any data type to form a third set.\n\nArguments\n\na: First input set\nb: Second input set\n\nOutput\n\nReturns a cell containing the difference of a and b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#Base.length-Tuple{SPICE.SpiceCell}",
    "page": "API",
    "title": "Base.length",
    "category": "method",
    "text": "length(cell)\n\nReturns the cardinality (number of elements) of cell.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.push!-Tuple{SPICE.SpiceCell,Vararg{Any,N} where N}",
    "page": "API",
    "title": "Base.push!",
    "category": "method",
    "text": "push!(cell, items...)\n\nInsert one or more items at the end of the char/double/integer SpiceCell cell.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.union-Union{Tuple{T}, Tuple{SpiceCell{T,T1,N} where N where T1,SpiceCell{T,T1,N} where N where T1}} where T",
    "page": "API",
    "title": "Base.union",
    "category": "method",
    "text": "union(a::T, b::T) where T <: SpiceCell\n\nCompute the union of two sets of any data type to form a third set.\n\nArguments\n\na: First input set\nb: Second input set\n\nOutput\n\nReturns a cell containing the union of a and b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.appnd-Tuple{Any,SPICE.SpiceCell{UInt8,T,N} where N where T}",
    "page": "API",
    "title": "SPICE.appnd",
    "category": "method",
    "text": "appnd(item, cell)\n\nAppend an item to the char/double/integer SpiceCell cell.\n\nReferences\n\nappndc - NAIF Documentation\nappndd - NAIF Documentation\nappndi - NAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.axisar-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.axisar",
    "category": "method",
    "text": "axisar(axis, angle)\n\nConstruct a rotation matrix that rotates vectors by a specified angle about a specified axis.\n\nArguments\n\naxis: Rotation axis\nangle: Rotation angle in radians\n\nOutput\n\nRotation matrix corresponding to axis and angle\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.b1900-Tuple{}",
    "page": "API",
    "title": "SPICE.b1900",
    "category": "method",
    "text": "b1900()\n\nReturns the Julian Date corresponding to Besselian date 1900.0.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.b1950-Tuple{}",
    "page": "API",
    "title": "SPICE.b1950",
    "category": "method",
    "text": "b1950()\n\nReturns the Julian Date corresponding to Besselian date 1950.0.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.badkpv-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.badkpv",
    "category": "method",
    "text": "badkpv(caller, name, comp, size, divby, typ)\n\nDetermine if a kernel pool variable is present and if so that it has the correct size and type.\n\nArguments\n\ncaller: Name of the routine calling this routine\nname: Name of a kernel pool variable\ncomp: Comparison operator\nsize: Expected size of the kernel pool variable\ndivby: A divisor of the size of the kernel pool variable\ntype: Expected type of the kernel pool variable\n\nOutput\n\nThe function returns false if the kernel pool variable is OK otherwise an exception is thrown.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bltfrm-Tuple{Any}",
    "page": "API",
    "title": "SPICE.bltfrm",
    "category": "method",
    "text": "bltfrm(frmcls)\n\nReturn a SPICE set containing the frame IDs of all built-in frames of a specified class.\n\nArguments\n\nfrmcls: Frame class\n\nOutput\n\nidset: Set of ID codes of frames of the specified class\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bodc2n-Tuple{Any}",
    "page": "API",
    "title": "SPICE.bodc2n",
    "category": "method",
    "text": "bodc2n(code)\n\nTranslate the SPICE integer code of a body into a common name for that body.\n\nArguments\n\ncode: Integer ID code to be translated into a name\n\nOutput\n\nA common name for the body identified by code or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bodc2s-Tuple{Any}",
    "page": "API",
    "title": "SPICE.bodc2s",
    "category": "method",
    "text": "bodc2s(code)\n\nTranslate a body ID code to either the corresponding name or if no name to ID code mapping exists, the string representation of the body ID value.\n\nArguments\n\ncode: Integer ID code to translate to a string\n\nOutput\n\nReturns a string corresponding to code\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.boddef-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.boddef",
    "category": "method",
    "text": "boddef(name, code)\n\nDefine a body name/ID code pair for later translation via bodn2c or bodc2n.\n\nArguments\n\nname: Common name of some body\ncode: Integer code for that body\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bodfnd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.bodfnd",
    "category": "method",
    "text": "bodfnd(body, item)\n\nDetermine whether values exist for some item for any body in the kernel pool.\n\nArguments\n\nbody: ID code of body\nitem: Item to find (\"RADII\", \"NUTAMPRA\", etc.)\n\nOutput\n\nReturns true if the item is in the kernel pool and false if it is not.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bodn2c-Tuple{Any}",
    "page": "API",
    "title": "SPICE.bodn2c",
    "category": "method",
    "text": "bodn2c(name)\n\nTranslate the name of a body or object to the corresponding SPICE integer ID code.\n\nArguments\n\nname: Body name to be translated into a SPICE ID code\n\nOutput\n\nReturn the SPICE integer ID code for the named body or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bods2c-Tuple{Any}",
    "page": "API",
    "title": "SPICE.bods2c",
    "category": "method",
    "text": "bods2c(name)\n\nTranslate a string containing a body name or ID code to an integer code.\n\nArguments\n\nname: String to be translated to an ID code\n\nOutput\n\nRetunrs the integer ID code corresponding to name or nothing if none as found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bodvcd",
    "page": "API",
    "title": "SPICE.bodvcd",
    "category": "function",
    "text": "bodvcd(bodyid, item)\n\nFetch from the kernel pool the double precision values of an item associated with a body, where the body is specified by an integer ID code.\n\nArguments\n\nbodyid: Body ID code\nitem: Item for which values are desired. (\"RADII\", \"NUTPRECANGLES\", etc.)\nmaxn: Maximum number of values that may be returned (default: 100)\n\nOutput\n\nReturns the requested values.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bodvrd",
    "page": "API",
    "title": "SPICE.bodvrd",
    "category": "function",
    "text": "bodvrd(bodynm, item)\n\nFetch from the kernel pool the double precision values of an item associated with a body.\n\nArguments\n\nbodynm: Body name\nitem: Item for which values are desired. (\"RADII\", \"NUTPRECANGLES\", etc.)\nmaxn: Maximum number of values that may be returned (default: 100)\n\nOutput\n\nvalues: Values\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.brcktd",
    "page": "API",
    "title": "SPICE.brcktd",
    "category": "function",
    "text": "brcktd(number, e1, e2)\n\nwarning: Deprecated\nUse clamp from Julia\'s standard library instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.brckti",
    "page": "API",
    "title": "SPICE.brckti",
    "category": "function",
    "text": "brckti(number, e1, e2)\n\nwarning: Deprecated\nUse clamp from Julia\'s standard library instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bschoc",
    "page": "API",
    "title": "SPICE.bschoc",
    "category": "function",
    "text": "bschoc(value, array, order)\n\nwarning: Deprecated\nUse findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bschoi",
    "page": "API",
    "title": "SPICE.bschoi",
    "category": "function",
    "text": "bschoi(value, array, order)\n\nwarning: Deprecated\nUse findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bsrchc",
    "page": "API",
    "title": "SPICE.bsrchc",
    "category": "function",
    "text": "bsrchc(value, array)\n\nwarning: Deprecated\nUse findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bsrchd",
    "page": "API",
    "title": "SPICE.bsrchd",
    "category": "function",
    "text": "bsrchd(value, array)\n\nwarning: Deprecated\nUse findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.bsrchi",
    "page": "API",
    "title": "SPICE.bsrchi",
    "category": "function",
    "text": "bsrchi(value, array)\n\nwarning: Deprecated\nUse findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.card-Tuple{SPICE.SpiceCell}",
    "page": "API",
    "title": "SPICE.card",
    "category": "method",
    "text": "card(cell)\n\nReturns the cardinality (number of elements) of cell.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ccifrm-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ccifrm",
    "category": "method",
    "text": "ccifrm(frclss, clssid)\n\nReturn the frame name, frame ID, and center associated with a given frame class and class ID.\n\nArguments\n\nfrclss: Class of frame\nclssid: Class ID of frame\n\nOutput\n\nReturns nothing if no frame was found or\n\nfrcode: ID code of the frame\nfrname: Name of the frame\ncenter: ID code of the center of the frame\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cgv2el-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.cgv2el",
    "category": "method",
    "text": "cgv2el(center, vec1, vec2)\n\nForm an ellipse from a center vector and two generating vectors.\n\nArguments\n\ncenter: Center vector\nvec1: Generating vector\nvec2: Generating vector\n\nOutput\n\nReturns the ellipse defined by the input vectors.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.chbder-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.chbder",
    "category": "method",
    "text": "chbder(cp, x2s, x, nderiv)\n\nGiven the coefficients for the Chebyshev expansion of a polynomial, this returns the value of the polynomial and its first nderiv derivatives evaluated at the input x.\n\nArguments\n\ncp: Chebyshev polynomial coefficients\nx2s: Transformation parameters of polynomial\nx: Value for which the polynomial is to be evaluated\nnderiv: The number of derivatives to compute\n\nOutput\n\nReturns the derivatives of the polynomial.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cidfrm-Tuple{Any}",
    "page": "API",
    "title": "SPICE.cidfrm",
    "category": "method",
    "text": "cidfrm(cent)\n\nRetrieve frame ID code and name to associate with a frame center.\n\nArguments\n\ncent: ID code for an object for which there is a preferred reference frame\n\nOutput\n\nReturns nothing if no frame was found or\n\nfrcode: The ID code of the frame associated with cent\nfrname: The name of the frame with ID frcode\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckcls-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ckcls",
    "category": "method",
    "text": "ckcls(handle)\n\nClose an open CK file.\n\nArguments\n\nhandle: Handle of the CK file to be closed\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckcov!-NTuple{7,Any}",
    "page": "API",
    "title": "SPICE.ckcov!",
    "category": "method",
    "text": "ckcov!(ck, idcode, needav, level, tol, timsys, cover)\n\nFind the coverage window for a specified object in a specified CK file.\n\nArguments\n\nck: Name of CK file\nidcode: ID code of object\nneedav: Flag indicating whether angular velocity is needed\nlevel: Coverage level:  \"SEGMENT\" OR \"INTERVAL\"\ntol: Tolerance in ticks\ntimsys: Time system used to represent coverage\ncover: Window giving coverage for idcode. Data already present in cover   will be combined with coverage found for the object designated by idcode   in the file ck.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckcov-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ckcov",
    "category": "method",
    "text": "ckcov(ck, idcode, needav, level, tol, timsys)\n\nFind the coverage window for a specified object in a specified CK file.\n\nArguments\n\nck: Name of CK file\nidcode: ID code of object\nneedav: Flag indicating whether angular velocity is needed\nlevel: Coverage level:  \"SEGMENT\" OR \"INTERVAL\"\ntol: Tolerance in ticks\ntimsys: Time system used to represent coverage\n\nOutput\n\nWindow giving coverage for idcode\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckgp-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.ckgp",
    "category": "method",
    "text": "ckgp(inst, sclkdp, tol, ref)\n\nGet pointing (attitude) for a specified spacecraft clock time.\n\nArguments\n\ninst: NAIF ID of instrument, spacecraft, or structure\nsclkdp: Encoded spacecraft clock time\ntol: Time tolerance\nref: Reference frame\n\nOutputs\n\nReturns nothing if the requested pointing is not available or\n\ncmat: C-matrix pointing data\nclkout: Output encoded spacecraft clock time\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckgpav-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.ckgpav",
    "category": "method",
    "text": "ckgpav(inst, sclkdp, tol, ref)\n\nGet pointing (attitude) and angular velocity for a specified spacecraft clock time.\n\nArguments\n\ninst: NAIF ID of instrument, spacecraft, or structure\nsclkdp: Encoded spacecraft clock time\ntol: Time tolerance\nref: Reference frame\n\nOutputs\n\nReturns nothing if the requested pointing is not available or\n\ncmat: C-matrix pointing data\nav: Angular velocity vector\nclkout: Output encoded spacecraft clock time\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cklpf-Tuple{Any}",
    "page": "API",
    "title": "SPICE.cklpf",
    "category": "method",
    "text": "cklpf(filename)\n\nLoad a CK pointing file for use by the CK readers.  Return that file\'s handle, to be used by other CK routines to refer to the file.\n\nArguments\n\nfilename: Name of the CK file to be loaded\n\nOutput\n\nLoaded file\'s handle\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckobj!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ckobj!",
    "category": "method",
    "text": "ckobj!(ck, ids)\n\nFind the set of ID codes of all objects in a specified CK file.\n\nArguments\n\nck: Name of CK file\nids: Set of ID codes of objects in CK file. Data already present in   ids will be combined with ID code set found for the file ck.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckobj-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ckobj",
    "category": "method",
    "text": "ckobj(ck)\n\nFind the set of ID codes of all objects in a specified CK file.\n\nArguments\n\nck: Name of CK file\n\nOutput\n\nSet of ID codes of objects in CK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckopn",
    "page": "API",
    "title": "SPICE.ckopn",
    "category": "function",
    "text": "ckopn(fname, ifname=\"CK_file\", ncomch=0)\n\nOpen a new CK file, returning the handle of the opened file.\n\nArguments\n\nfname: The name of the CK file to be opened\nifname: The internal filename for the CK (default: \"CK_file\")\nncomch: The number of characters to reserve for comments (default: 0)\n\nOutput\n\nhandle: The handle of the opened CK file\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckupf-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ckupf",
    "category": "method",
    "text": "ckupf(handle)\n\nUnload a CK pointing file so that it will no longer be searched by the readers.\n\nArguments\n\nhandle: Handle of CK file to be unloaded\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckw01",
    "page": "API",
    "title": "SPICE.ckw01",
    "category": "function",
    "text": "ckw01(handle, begtim, endtim, inst, ref, segid, sclkdp, quats, avvs=[zeros(3)])\n\nAdd a type 1 segment to a C-kernel.\n\nArguments\n\nhandle: Handle of an open CK file\nbegtim: The beginning encoded SCLK of the segment\nendtim: The ending encoded SCLK of the segment\ninst: The NAIF instrument ID code\nref: The reference frame of the segment\nsegid: Segment identifier\nsclkdp: Encoded SCLK times\nquats: Quaternions representing instrument pointing\navvs: Angular velocity vectors (optional)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckw02-NTuple{11,Any}",
    "page": "API",
    "title": "SPICE.ckw02",
    "category": "method",
    "text": "ckw02(handle, begtim, endtim, inst, ref, segid, start, stop, quats, avvs, rates)\n\nWrite a type 2 segment to a C-kernel.\n\nArguments\n\nhandle: Handle of an open CK file\nbegtim: The beginning encoded SCLK of the segment\nendtim: The ending encoded SCLK of the segment\ninst: The NAIF instrument ID code\nref: The reference frame of the segment\nsegid: Segment identifier\nstart: Encoded SCLK interval start times\nstop: Encoded SCLK interval stop times\nquats: Quaternions representing instrument pointing\navvs: Angular velocity vectors\nrates: Number of seconds per tick for each interval\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckw03",
    "page": "API",
    "title": "SPICE.ckw03",
    "category": "function",
    "text": "ckw03(handle, begtim, endtim, inst, ref, segid, sclkdp, quats, starts, avvs=[zeros(3)])\n\nAdd a type 3 segment to a C-kernel.\n\nArguments\n\nhandle: Handle of an open CK file\nbegtim: The beginning encoded SCLK of the segment\nendtim: The ending encoded SCLK of the segment\ninst: The NAIF instrument ID code\nref: The reference frame of the segment\nsegid: Segment identifier\nsclkdp: Encoded SCLK times\nquats: Quaternions representing instrument pointing\nstarts: Encoded SCLK interval start times\navvs: Angular velocity vectors (optional)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ckw05-NTuple{14,Any}",
    "page": "API",
    "title": "SPICE.ckw05",
    "category": "method",
    "text": "ckw05(handle, subtyp, degree, begtim, endtim, inst, ref, avflag, segid, sclkdp, packts,\n      rate, nints, starts)\n\nWrite a type 5 segment to a CK file.\n\nArguments\n\nhandle: Handle of an open CK file\nsubtyp: CK type 5 subtype code\ndegree: Degree of interpolating polynomials\nbegtim: The beginning encoded SCLK of the segment\nendtim: The ending encoded SCLK of the segment\ninst: The NAIF instrument ID code\nref: The reference frame of the segment\navflag: True if the segment will contain angular velocity\nsegid: Segment identifier\nsclkdp: Encoded SCLK times\npackts: Array of packets\nrate: Nominal SCLK rate in seconds per tick\nnints: Number of intervals\nstarts: Encoded SCLK interval start times\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cleard",
    "page": "API",
    "title": "SPICE.cleard",
    "category": "function",
    "text": "cleard(array)\n\n!!! warning Deprecates     Use empty!(array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.clight-Tuple{}",
    "page": "API",
    "title": "SPICE.clight",
    "category": "method",
    "text": "clight()\n\nReturns the speed of light in vacuo (km/sec).\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.clpool-Tuple{}",
    "page": "API",
    "title": "SPICE.clpool",
    "category": "method",
    "text": "clpool()\n\nRemove all variables from the kernel pool. Watches on kernel variables are retained.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cmprss-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.cmprss",
    "category": "method",
    "text": "cmprss(delim, n, input)\n\nCompress a character string by removing occurrences of more than n consecutive occurrences of a specified character.\n\nArguments\n\ndelim: Delimiter to be compressed\nn: Maximum consecutive occurrences of delim\ninput: Input string\n\nOutput\n\nReturns the compressed string.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cnmfrm",
    "page": "API",
    "title": "SPICE.cnmfrm",
    "category": "function",
    "text": "cnmfrm(cname)\n\nRetrieve frame ID code and name to associate with an object.\n\nArguments\n\ncname: Name of the object to find a frame for\n\nOutput\n\nReturns a tuple of the ID code and the name of the frame associated with cname or nothing if no frame is found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.conics-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.conics",
    "category": "method",
    "text": "conics(elts, et)\n\nDetermine the state (position, velocity) of an orbiting body from a set of elliptic, hyperbolic, or parabolic orbital elements.\n\nArguments\n\nelts: Conic elements\net: Input time\n\nOutput\n\nReturns the state of orbiting body at et.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.convrt-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.convrt",
    "category": "method",
    "text": "convrt(x, in, out)\n\nTake a measurement x, the units associated with x, and units to which x should be converted; return y - the value of the measurement in the output units.\n\nArguments\n\nx: Number representing a measurement in some units\nin: The units in which x is measured\nout: Desired units for the measurement\n\nOutput\n\nReturns the measurement in the desired units.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cpos-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.cpos",
    "category": "method",
    "text": "cpos(str, chars, start)\n\nFind the first occurrence in a string of a character belonging to a collection of characters, starting at a specified location, searching forward.\n\nArguments\n\nstr: Any character string\nchars: A collection of characters\nstart: Position to begin looking for one of chars\n\nOutput\n\nReturns the index of the first character of str that is one of the characters in string chars. Returns -1 if none of the characters was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cposr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.cposr",
    "category": "method",
    "text": "cposr(str, chars, start)\n\nFind the first occurrence in a string of a character belonging to a collection of characters, starting at a specified location, searching in reverse.\n\nArguments\n\nstr: Any character string\nchars: A collection of characters\nstart: Position to begin looking for one of chars\n\nOutput\n\nReturns the index of the last character of str that is one of the characters in string chars. Returns -1 if none of the characters was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cvpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.cvpool",
    "category": "method",
    "text": "cvpool(agent)\n\nIndicate whether or not any watched kernel variables that have a specified agent on their notification list have been updated.\n\nArguments\n\nagent: Name of the agent to check for notices\n\nOutput\n\nReturns true if variables for agent have been updated.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cyllat-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.cyllat",
    "category": "method",
    "text": "cyllat(r, lonc, z)\n\nConvert from cylindrical to latitudinal coordinates.\n\nArguments\n\nr: Distance of point from z axis\nlonc: Cylindrical angle of point from XZ plane (radians)\nz: Height of point above XY plane\n\nOutput\n\nradius: Radius\nlon: Longitude (radians)\nlat: Latitude (radians)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cylrec-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.cylrec",
    "category": "method",
    "text": "cylrec(r, lon, z)\n\nConvert from cylindrical to rectangular coordinates.\n\nArguments\n\nr: Distance of the point of interest from z axis\nlon: Cylindrical angle (in radians) of the point of interest from XZ plane\nz: Height of the point above XY plane\n\nOutput\n\nReturns rectangular coordinates of the point of interest.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.cylsph-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.cylsph",
    "category": "method",
    "text": "cylsph(r, lonc, z)\n\nConvert from cylindrical to spherical coordinates.\n\nArguments\n\nr: Distance of point from z axis\nlonc: Angle (radians) of point from XZ plane\nz: Height of point above XY plane\n\nOutput\n\nradius: Distance of the point from the origin\ncolat: Polar angle (co-latitude in radians)\nlon: Azimuthal angle (longitude)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafac-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dafac",
    "category": "method",
    "text": "dafac(handle, buffer)\n\nAdd comments from a buffer of character strings to the comment area of a binary DAF file, appending them to any comments which are already present in the file\'s comment area.\n\nArguments\n\nhandle: Handle of a DAF opened with write access\nbuffer: Buffer of comments to put into the comment area\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafbbs-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafbbs",
    "category": "method",
    "text": "dafbbs(handle)\n\nBegin a backward search for arrays in a DAF.\n\nArguments\n\nhandle: Handle of DAF to be searched\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafbfs-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafbfs",
    "category": "method",
    "text": "dafbfs(handle)\n\nBegin a forward search for arrays in a DAF.\n\nArguments\n\nhandle: Handle of DAF to be searched\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafcls-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafcls",
    "category": "method",
    "text": "dafcls(handle)\n\nClose the DAF associated with a given handle.\n\nArguments\n\nhandle: Handle of DAF to be closed\n\nOutput\n\nReturns the handle of the closed file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafcs-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafcs",
    "category": "method",
    "text": "dafcs(handle)\n\nSelect a DAF that already has a search in progress as the one to continue searching.\n\nArguments\n\nhandle: Handle of DAF to continue searching\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafdc-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafdc",
    "category": "method",
    "text": "dafdc(handle)\n\nDelete the entire comment area of a specified DAF file.\n\nArguments\n\nhandle: The handle of a binary DAF opened for writing\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafec-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafec",
    "category": "method",
    "text": "dafec(handle; bufsiz=256, lenout=1024)\n\nExtract comments from the comment area of a binary DAF.\n\nArguments\n\nhandle: Handle of binary DAF opened with read access\nbufsiz: Maximum size, in lines, of buffer (default: 256)\nlenout: Length of strings in output buffer (default: 1024)\n\nOutput\n\nReturns a buffer where extracted comment lines are placed.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.daffna-Tuple{}",
    "page": "API",
    "title": "SPICE.daffna",
    "category": "method",
    "text": "daffna()\n\nFind the next (forward) array in the current DAF.\n\nOutput\n\nReturns true if an array was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.daffpa-Tuple{}",
    "page": "API",
    "title": "SPICE.daffpa",
    "category": "method",
    "text": "daffpa()\n\nFind the previous (backward) array in the current DAF.\n\nOutput\n\nReturns true if an array was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafgda-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dafgda",
    "category": "method",
    "text": "dafgda(handle, start, stop)\n\nRead the double precision data bounded by two addresses within a DAF.\n\nArguments\n\nhandle: Handle of a DAF\nstart, stop: Initial, final address within file\n\nOutput\n\nReturns the data contained between start and stop.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafgh-Tuple{}",
    "page": "API",
    "title": "SPICE.dafgh",
    "category": "method",
    "text": "dafgh()\n\nReturn (get) the handle of the DAF currently being searched.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafgn",
    "page": "API",
    "title": "SPICE.dafgn",
    "category": "function",
    "text": "dafgn(lenout=128)\n\nReturn (get) the name for the current array in the current DAF.\n\nArguments\n\nlenout: Length of array name string (default: 128)\n\nOutput\n\nReturns the name of the current array.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafgs!-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafgs!",
    "category": "method",
    "text": "dafgs!(sum)\n\nReturn (get) the summary for the current array in the current DAF and write it to sum.\n\nArguments\n\nsum: An empty Vector{Float64} with the expected length\n\nOutput\n\nReturns the summary for the current array.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafgsr-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.dafgsr",
    "category": "method",
    "text": "Read a portion of the contents of a summary record in a DAF file.\n\nArguments\n\nhandle: Handle of DAF\nrecno: Record number\nstart: First word to read from record\nstop: Last word to read from record\n\nOutput\n\nReturns the contents of the record or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafopr-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafopr",
    "category": "method",
    "text": "dafopr(fname)\n\nOpen a DAF for subsequent read requests.\n\nArguments\n\nfname: Name of DAF to be opened\n\nOutput\n\nReturns the handle assigned to DAF.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafopw-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafopw",
    "category": "method",
    "text": "dafopw(fname)\n\nOpen a DAF for subsequent write requests.\n\nArguments\n\nfname: Name of DAF to be opened\n\nOutput\n\nReturns the handle assigned to DAF.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafps-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dafps",
    "category": "method",
    "text": "dafps(dc, ic)\n\nPack (assemble) an array summary from its double precision and integer components.\n\nArguments\n\ndc: Double precision components\nic: Integer components\n\nOutput\n\nReturns the array summary.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafrfr",
    "page": "API",
    "title": "SPICE.dafrfr",
    "category": "function",
    "text": "dafrfr(handle, lenout=128)\n\nRead the contents of the file record of a DAF.\n\nArguments\n\nhandle: Handle of an open DAF file\nlenout: Available room in the output string `ifname\' (default: 128)\n\nOutput\n\nnd: Number of double precision components in summaries\nni: Number of integer components in summaries\nifname: Internal file name\nfward: Forward list pointer\nbward: Backward list pointer\nfree: Free address pointer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafrs-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dafrs",
    "category": "method",
    "text": "dafrs(sum)\n\nChange the summary for the current array in the current DAF.\n\nArguments\n\nsum: New summary for current array\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dafus-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dafus",
    "category": "method",
    "text": "dafus(sum, nd, ni)\n\nUnpack an array summary into its double precision and integer components.\n\nArguments\n\nsum: Array summary\nnd: Number of double precision components\nni: Number of integer components\n\nOutput\n\ndc: Double precision components\nic: Integer components\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dasac-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dasac",
    "category": "method",
    "text": "dasac(handle, buffer)\n\nAdd comments from a buffer of character strings to the comment area of a binary DAS file, appending them to any comments which are already present in the file\'s comment area.\n\nArguments\n\nhandle: Handle of a DAS opened with write access\nbuffer: Buffer of comments to put into the comment area\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dascls-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dascls",
    "category": "method",
    "text": "dascls(handle)\n\nClose the DAS associated with a given handle.\n\nArguments\n\nhandle: Handle of DAS to be closed\n\nOutput\n\nReturns the handle of the closed file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dasdc-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dasdc",
    "category": "method",
    "text": "dasdc(handle)\n\nDelete the entire comment area of a specified DAS file.\n\nArguments\n\nhandle: The handle of a binary DAS opened for writing\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dasec-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dasec",
    "category": "method",
    "text": "dasec(handle; bufsiz=256, lenout=1024)\n\nExtract comments from the comment area of a binary DAS.\n\nArguments\n\nhandle: Handle of binary DAS opened with read access\nbufsiz: Maximum size, in lines, of buffer (default: 256)\nlenout: Length of strings in output buffer (default: 1024)\n\nOutput\n\nReturns a buffer where extracted comment lines are placed.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dashfn",
    "page": "API",
    "title": "SPICE.dashfn",
    "category": "function",
    "text": "dashfn(handle, namelen=256)\n\nReturn the name of the DAS file associated with a handle.\n\nArguments\n\nhandle: Handle of a DAS file\nnamlen: Length of output file name string (default: 256)\n\nOutput\n\nReturns the corresponding file name.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dasopr-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dasopr",
    "category": "method",
    "text": "dasopr(fname)\n\nOpen a DAS for subsequent read requests.\n\nArguments\n\nfname: Name of DAS to be opened\n\nOutput\n\nReturns the handle assigned to DAS.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dasopw-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dasopw",
    "category": "method",
    "text": "dasopw(fname)\n\nOpen a DAS for subsequent write requests.\n\nArguments\n\nfname: Name of DAS to be opened\n\nOutput\n\nReturns the handle assigned to DAS.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dasrfr",
    "page": "API",
    "title": "SPICE.dasrfr",
    "category": "function",
    "text": "dasrfr(handle, idwlen=128, ifnlen=256)\n\nRead the contents of the file record of a DAS.\n\nArguments\n\nhandle: DAS file handle\nidwlen: Length of ID word string (default: 128)\nifnlen: Length of internal file name string (default: 256)\n\nOutput\n\nidword: ID word\nifname: DAS internal file name\nnresvr: Number of reserved records in file\nnresvc: Number of characters in use in reserved records area\nncomr: Number of comment records in file\nncomc: Number of characters in use in comment area\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dcyldr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dcyldr",
    "category": "method",
    "text": "dcyldr(x, y, z)\n\nCompute the Jacobian of the transformation from rectangular to cylindrical coordinates.\n\nArguments\n\nx: X-coordinate of point\ny: Y-coordinate of point\nz: Z-coordinate of point\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.deltet-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.deltet",
    "category": "method",
    "text": "deltet(epoch, eptype)\n\nReturn the value of ΔET (ET-UTC) for an input epoch.\n\nArguments\n\nepoch: Input epoch (seconds past J2000)\neptype: Type of input epoch (\"UTC\" or \"ET\")\n\nOutput\n\nReturns ΔET (ET-UTC) at input epoch.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dgeodr-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.dgeodr",
    "category": "method",
    "text": "dgeodr(x, y, z, re, f)\n\nCompute the Jacobian of the transformation from rectangular to geodetic coordinates.\n\nArguments\n\nx: X-coordinate of point\ny: Y-coordinate of point\nz: Z-coordinate of point\nre: Equatorial radius of the reference spheroid\nf: Flattening coefficient\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.diags2-Tuple{Any}",
    "page": "API",
    "title": "SPICE.diags2",
    "category": "method",
    "text": "diags2(symmat)\n\nDiagonalize a symmetric 2x2 matrix.\n\nArguments\n\nsymmat: A symmetric 2x2 matrix\n\nOutput\n\ndiag: A diagonal matrix similar to symmat\nrotate: A rotation used as the similarity transformation\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dlabbs-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dlabbs",
    "category": "method",
    "text": "dlabbs(handle)\n\nBegin a backward segment search in a DLA file.\n\nArguments\n\nhandle: Handle of open DLA file\n\nOutput\n\nReturns the descriptor of the last segment in the DLA file or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dlabfs-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dlabfs",
    "category": "method",
    "text": "dlabfs(handle)\n\nBegin a forward segment search in a DLA file.\n\nArguments\n\nhandle: Handle of open DLA file\n\nOutput\n\nReturns the descriptor of the first segment in the DLA file or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dlafns-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dlafns",
    "category": "method",
    "text": "dlafns(handle, descr)\n\nFind the segment following a specified segment in a DLA file.\n\nArguments\n\nhandle: Handle of open DLA file\ndescr: Descriptor of a DLA segment\n\nOutput\n\nReturns the descriptor of the next segment in the DLA file or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dlafps-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dlafps",
    "category": "method",
    "text": "dlafps(handle, descr)\n\nFind the segment preceding a specified segment in a DLA file.\n\nArguments\n\nhandle: Handle of open DLA file\ndescr: Descriptor of a DLA segment\n\nOutput\n\nReturns the descriptor of the previous segment in the DLA file or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dlatdr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dlatdr",
    "category": "method",
    "text": "dlatdr(x, y, z)\n\nCompute the Jacobian of the transformation from rectangular to latitudinal coordinates.\n\nArguments\n\nx: X-coordinate of point\ny: Y-coordinate of point\nz: Z-coordinate of point\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dp2hx",
    "page": "API",
    "title": "SPICE.dp2hx",
    "category": "function",
    "text": "dp2hx(number, lenout=128)\n\nConvert a double precision number to an equivalent character string using base 16 \"scientific notation.\"\n\nArguments\n\nnumber: Number to be converted\nlenout: Available space for output string\n\nOutput\n\nReturns the equivalent character string, left justified.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dpgrdr-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.dpgrdr",
    "category": "method",
    "text": "dpgrdr(x, y, z, re, f)\n\nCompute the Jacobian of the transformation from rectangular to planetographic coordinates.\n\nArguments\n\nbody: Body with which coordinate system is associated\nx: X-coordinate of point\ny: Y-coordinate of point\nz: Z-coordinate of point\nre: Equatorial radius of the reference spheroid\nf: Flattening coefficient\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dpmax",
    "page": "API",
    "title": "SPICE.dpmax",
    "category": "function",
    "text": "dpmax()\n\n!!! warning Deprecated     Use prevfloat(typemax(Float64)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dpmin",
    "page": "API",
    "title": "SPICE.dpmin",
    "category": "function",
    "text": "dpmin()\n\n!!! warning Deprecated     Use nextfloat(typemin(Float64)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dpr",
    "page": "API",
    "title": "SPICE.dpr",
    "category": "function",
    "text": "dpr()\n\n!!! warning Deprecated     Use rad2deg(1.0) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.drdcyl-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.drdcyl",
    "category": "method",
    "text": "drdcyl(r, lon, z)\n\nCompute the Jacobian of the transformation from cylindrical to rectangular coordinates.\n\nArguments\n\nr: Distance of a point from the origin\nlon: Angle of the point from the xz plane in radians\nz: Height of the point above the xy plane\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.drdgeo-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.drdgeo",
    "category": "method",
    "text": "drdgeo(lon, lat, alt, re, f)\n\nCompute the Jacobian of the transformation from geodetic to rectangular coordinates.\n\nArguments\n\nlon: Geodetic longitude of point (radians)\nlat: Geodetic latitude of point (radians)\nalt: Altitude of point above the reference spheroid\nre: Equatorial radius of the reference spheroid\nf: Flattening coefficient\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.drdlat-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.drdlat",
    "category": "method",
    "text": "drdlat(radius, lon, lat)\n\nCompute the Jacobian of the transformation from latitudinal to rectangular coordinates.\n\nArguments\n\nradius: Distance of a point from the origin\nlon: Angle of the point from the XZ plane in radians\nlat: Angle of the point from the XY plane in radians\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.drdpgr-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.drdpgr",
    "category": "method",
    "text": "drdpgr(body, lon, lat, alt, re, f)\n\nCompute the Jacobian matrix of the transformation from planetographic to rectangular coordinates.\n\nArguments\n\nbody: Name of body with which coordinates are associated\nlon: Planetographic longitude of a point (radians)\nlat: Planetographic latitude of a point (radians)\nalt: Altitude of a point above reference spheroid\nre: Equatorial radius of the reference spheroid\nf: Flattening coefficient\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.drdsph-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.drdsph",
    "category": "method",
    "text": "drdsph(r, colat, lon)\n\nCompute the Jacobian of the transformation from latitudinal to rectangular coordinates.\n\nArguments\n\nr: Distance of a point from the origin\ncolat: Angle of the point from the positive z-axis\nlon: Angle of the point from the xy plane\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskb02-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dskb02",
    "category": "method",
    "text": "dskb02(handle, dladsc)\n\nReturn bookkeeping data from a DSK type 2 segment.\n\nArguments\n\nhandle: DSK file handle\ndladsc: DLA descriptor\n\nOutput\n\nnv: Number of vertices in model\nnp: Number of plates in model\nnvxtot: Number of voxels in fine grid\nvtxbds: Vertex bounds\nvoxsiz: Fine voxel edge length\nvoxori: Fine voxel grid origin\nvgrext: Fine voxel grid exent\ncgscal: Coarse voxel grid scale\nvtxnpl: Size of vertex-plate correspondence list\nvoxnpt: Size of voxel-plate pointer list\nvoxnpl: Size of voxel-plate correspondence list\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskcls",
    "page": "API",
    "title": "SPICE.dskcls",
    "category": "function",
    "text": "dskcls(handle, optmiz=true)\n\nClose a DSK file.\n\nArguments\n\nhandle: Handle assigned to the opened DSK file\noptmiz: Flag indicating whether to segregate the DSK (default: true)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskd02-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.dskd02",
    "category": "method",
    "text": "dskd02(handle, dladsc, item, start, room)\n\nFetch double precision data from a type 2 DSK segment.\n\nArguments\n\nhandle: DSK file handle\ndladsc: DLA descriptor\nitem: Keyword identifying item to fetch\nstart: Start index\nroom: Amount of room in output array\n\nOutput\n\nReturns an array containing the requested item.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskgd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dskgd",
    "category": "method",
    "text": "dskgd(handle, dladsc)\n\nReturn the DSK descriptor from a DSK segment identified by a DAS handle and DLA descriptor.\n\nArguments\n\nhandle: Handle of a DSK file\ndladsc: DLA segment descriptor\n\nOutput\n\nReturns the DSK segment descriptor.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskgtl-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dskgtl",
    "category": "method",
    "text": "dskgtl(keywrd)\n\nRetrieve the value of a specified DSK tolerance or margin parameter.\n\nArguments\n\nkeywrd: Code specifying parameter to retrieve\n\nOutput\n\nReturns the value of the parameter.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dski02-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.dski02",
    "category": "method",
    "text": "dski02(handle, dladsc, item, start, room)\n\nFetch integer data from a type 2 DSK segment.\n\nArguments\n\nhandle: DSK file handle\ndladsc: DLA descriptor\nitem: Keyword identifying item to fetch\nstart: Start index\nroom: Amount of room in output array\n\nOutput\n\nReturns an array containing the requested item.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskmi2-NTuple{9,Any}",
    "page": "API",
    "title": "SPICE.dskmi2",
    "category": "method",
    "text": "dskmi2(vrtces, plates, finscl, corscl, worksz, voxpsz, voxlsz, makvtl, spaisz)\n\nMake spatial index for a DSK type 2 segment.\n\nArguments\n\nvrtces: Vertices\nplates: Plates\nfinscl: Fine voxel scale\ncorscl: Coarse voxel scale\nworksz: Workspace size\nvoxpsz: Voxel-plate pointer array size\nvoxlsz: Voxel-plate list array size\nmakvtl: Vertex-plate list flag\nspxisz: Spatial index integer component size\n\nOutput\n\nspaixd: Double precision component of spatial index.\nspaixi: Integer component of spatial index.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskn02-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dskn02",
    "category": "method",
    "text": "dskn02(handle, dladsc, plid)\n\nCompute the unit normal vector for a specified plate from a type 2 DSK segment.\n\nArguments\n\nhandle: DSK file handle\ndladsc: DLA descriptor\nplid: Plate ID\n\nOutput\n\nReturn the plate\'s unit normal vector.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskobj!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dskobj!",
    "category": "method",
    "text": "dskobj(dsk, size=100)\ndskobj!(set, dsk)\n\nFind the set of body ID codes of all objects for which topographic data are provided in a specified DSK file.\n\nArguments\n\ndsk: Name of DSK file\nset or len: Either a preallocated SpiceIntCell or the size of the output set.\n\nOutput\n\nReturns the set of ID codes of objects in the DSK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskopn-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dskopn",
    "category": "method",
    "text": "dskopn(fname, ifname, ncomch)\n\nOpen a new DSK file for subsequent write operations.\n\nArguments\n\nfname: Name of a DSK file to be opened\nifname: Internal file name\nncomch: Number of comment characters to allocate\n\nOutput\n\nReturns the handle assigned to the opened DSK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskp02-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.dskp02",
    "category": "method",
    "text": "dskp02(handle, dladsc, start, room)\n\nFetch triangular plates from a type 2 DSK segment.\n\nArguments\n\nhandle: DSK file handle\ndladsc: DLA descriptor\nstart: Start index\nroom: Amount of room in output array\n\nOutput\n\nReturns an array of plates.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskrb2-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.dskrb2",
    "category": "method",
    "text": "dskrb2(vrtces, plates, corsys, corpar)\n\nDetermine range bounds for a set of triangular plates to be stored in a type 2 DSK segment.\n\nArguments\n\nvrtces: Vertices\nplates: Plates\ncorsys: DSK coordinate system code\ncorpar: DSK coordinate system parameters\n\nOutput\n\nmncor3: Lower bound on range of third coordinate\nmxcor3: Upper bound on range of third coordinate\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dsksrf!-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dsksrf!",
    "category": "method",
    "text": "dsksrf(dsk, size=100)\ndsksrf!(set, dsk)\n\nFind the set of surface ID codes of all objects for which topographic data are provided in a specified DSK file.\n\nArguments\n\ndsk: Name of DSK file\nset or len: Either a preallocated SpiceIntCell or the size of the output set.\n\nOutput\n\nReturns the set of ID codes of surfaces in the DSK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskstl-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dskstl",
    "category": "method",
    "text": "dskstl(keywrd)\n\nSet the value of a specified DSK tolerance or margin parameter.\n\nArguments\n\nkeywrd: Code specifying parameter to retrieve\ndpval: Value of parameter\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskv02-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.dskv02",
    "category": "method",
    "text": "dskv02(handle, dladsc, start, room)\n\nFetch vertices from a type 2 DSK segment.\n\nArguments\n\nhandle: DSK file handle\ndladsc: DLA descriptor\nstart: Start index\nroom: Amount of room in output array\n\nOutput\n\nReturns an array of vertices.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskw02-NTuple{19,Any}",
    "page": "API",
    "title": "SPICE.dskw02",
    "category": "method",
    "text": "dskw02(handle, center, surfid, dclass, frame, corsys, corpar, mncor1, mxcor1,\n       mncor2, mxcor2, mncor3, mxcor3, first, last, vrtces, plates, spaixd, spaixi)\n\nWrite a type 2 segment to a DSK file.\n\nArguments\n\nhandle: Handle assigned to the opened DSK file\ncenter: Central body ID code\nsurfid: Surface ID code\ndclass: Data class\nframe: Reference frame\ncorsys: Coordinate system code\ncorpar: Coordinate system parameters\nmncor1: Minimum value of first coordinate\nmxcor1: Maximum value of first coordinate\nmncor2: Minimum value of second coordinate\nmxcor2: Maximum value of second coordinate\nmncor3: Minimum value of third coordinate\nmxcor3: Maximum value of third coordinate\nfirst: Coverage start time\nlast: Coverage stop time\nnv: Number of vertices\nvrtces: Vertices\nnp: Number of plates\nplates: Plates\nspaixd: Double precision component of spatial index\nspaixi: Integer component of spatial index\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskx02-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.dskx02",
    "category": "method",
    "text": "dskx02(handle, dladsc, vertex, raydir)\n\nDetermine the plate ID and body-fixed coordinates of the intersection of a specified ray with the surface defined by a type 2 DSK plate model.\n\nArguments\n\nhandle: Handle of DSK kernel containing plate model\ndladsc: DLA descriptor of plate model segment\nvertex: Ray vertex in the body fixed frame\nraydir: Ray direction in the body fixed frame\n\nOutput\n\nReturns nothing if no intercept exists or\n\nplid: ID code of the plate intersected by the ray\nxpt: Intercept\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskxsi",
    "page": "API",
    "title": "SPICE.dskxsi",
    "category": "function",
    "text": "dskxsi(pri, target, nsurf, srflst, et, fixref, vertex, raydir, maxd=1, maxi=1)\n\nCompute a ray-surface intercept using data provided by multiple loaded DSK segments. Return information about the source of the data defining the surface on which the intercept was found: DSK handle, DLA and DSK descriptors, and DSK data type-dependent parameters.\n\nArguments\n\npri: Data prioritization flag\ntarget: Target body name\nsrflst: Surface ID list\net: Epoch, expressed as seconds past J2000 TDB\nfixref: Name of target body-fixed reference frame\nvertex: Vertex of ray\nraydir: Direction vector of ray\nmaxd: Size of DC array (default: 1)\nmaxi: Size of IC array (default: 1)\n\nOutput\n\nReturns nothing if no intercept exists or\n\nxpt: Intercept point\nhandle: Handle of segment contributing surface data\ndladsc: DLA descriptor of segment\ndskdsc: DSK descriptor of segment\ndc: Double precision component of source info\nic: Integer component of source info\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskxv-NTuple{7,Any}",
    "page": "API",
    "title": "SPICE.dskxv",
    "category": "method",
    "text": "dskxv(pri, target, srflst, et, fixref, nrays, vtxarr, dirarr)\n\nCompute ray-surface intercepts for a set of rays, using data provided by multiple loaded DSK segments.\n\nArguments\n\npri: Data prioritization flag\ntarget: Target body name\nsrflst: Surface ID list\net: Epoch, expressed as seconds past J2000 TDB\nfixref: Name of target body-fixed reference frame\nnrays: Number of rays\nvtxarr: Array of vertices of rays\ndirarr: Array of direction vectors of rays\n\nOutput\n\nxptarr: Intercept point array\nfndarr: Found flag array\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dskz02-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dskz02",
    "category": "method",
    "text": "dskz02(handle, dladsc)\n\nReturn plate model size parameters - plate count and vertex count - for a type 2 DSK segment.\n\nArguments\n\nhandle: DSK file handle\ndladsc: DLA descriptor\n\nOutput\n\nnv: Number of vertices\nnp: Number of plates\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dsphdr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.dsphdr",
    "category": "method",
    "text": "dsphdr(x, y, z)\n\nCompute the Jacobian of the transformation from rectangular to spherical coordinates.\n\nArguments\n\nx: X-coordinate of point\ny: Y-coordinate of point\nz: Z-coordinate of point\n\nOutput\n\nReturns the matrix of partial derivatives.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dtpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dtpool",
    "category": "method",
    "text": "dtpool(name)\n\nReturn the data about a kernel pool variable.\n\nArguments\n\nname: Name of the variable whose value is to be returned\n\nOutput\n\nReturns the tuple (n ,vartype).\n\nn: Number of values returned for name\nvartype: Type of the variable\n:C if the data is character data\n:N if the data is numeric\n:X if there is no variable name in the pool\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ducrss-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ducrss",
    "category": "method",
    "text": "ducrss(s1, s2)\n\nCompute the unit vector parallel to the cross product of two 3-dimensional vectors and the derivative of this unit vector.\n\nArguments\n\ns1: Left hand state for cross product and derivative\ns2: Right hand state for cross product and derivative\n\nOutput\n\nReturns the unit vector and derivative of the cross product.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dvcrss-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dvcrss",
    "category": "method",
    "text": "dvcrss(s1, s2)\n\nCompute the cross product of two 3-dimensional vectors and the derivative of this cross product.\n\nArguments\n\ns1: Left hand state for cross product and derivative\ns2: Right hand state for cross product and derivative\n\nOutput\n\nReturns the cross product and its derivative.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dvdot-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dvdot",
    "category": "method",
    "text": "dvdot(s1, s2)\n\nCompute the derivative of the dot product of two double precision position vectors.\n\nArguments\n\ns1: First state vector in the dot product\ns2: Second state vector in the dot product\n\nOutput\n\nReturns the derivative of the dot product s1 ⋅ s2.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dvhat-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dvhat",
    "category": "method",
    "text": "dvhat(s1)\n\nFind the unit vector corresponding to a state vector and the derivative of the unit vector.\n\nArguments\n\ns1: State to be normalized\n\nOutput\n\nReturns the unit vector s1 / |s1|, and its time derivative.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dvnorm-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dvnorm",
    "category": "method",
    "text": "dvnorm(state)\n\nFunction to calculate the derivative of the norm of a 3-vector.\n\nArguments\n\nstate: A 6-vector composed of three coordinates and their derivatives.\n\nOutput\n\nReturns the derivative of the norm of state.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dvpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.dvpool",
    "category": "method",
    "text": "dvpool(name)\n\nDelete a variable from the kernel pool.\n\nArguments\n\nname: Name of the kernel variable to be deleted\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.dvsep-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.dvsep",
    "category": "method",
    "text": "dvsep(s1, s2)\n\nCalculate the time derivative of the separation angle between two input states, s1 and s2.\n\nArguments\n\ns1: State vector of the first body\ns2: State vector of the second  body\n\nOutput\n\nReturns the value of the time derivative of the angular separation between s1 and s2.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.edlimb-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.edlimb",
    "category": "method",
    "text": "edlimb(a, b, c, viewpt)\n\nFind the limb of a triaxial ellipsoid, viewed from a specified point.\n\nArguments\n\na: Length of ellipsoid semi-axis lying on the x-axis\nb: Length of ellipsoid semi-axis lying on the y-axis\nc: Length of ellipsoid semi-axis lying on the z-axis\nviewpt: Location of viewing point\n\nOutput\n\nReturns the limb of the ellipsoid as seen from the viewing point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.edterm-NTuple{8,Any}",
    "page": "API",
    "title": "SPICE.edterm",
    "category": "method",
    "text": "edterm(trmtyp, source, target, et, fixref, abcorr, obsrvr, npts)\n\nCompute a set of points on the umbral or penumbral terminator of a specified target body, where the target shape is modeled as an ellipsoid.\n\nArguments\n\ntrmtyp: Terminator type\nsource: Light source\ntarget: Target body\net: Observation epoch\nfixref: Body-fixed frame associated with target\nabcorr: Aberration correction\nobsrvr: Observer\nnpts: Number of points in terminator set\n\nOutput\n\ntrgepc: Epoch associated with target center\nobspos: Position of observer in body-fixed frame\ntrmpts: Terminator point set\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekacec-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekacec",
    "category": "method",
    "text": "ekacec(handle, segno, recno, column, cvals, isnull)\n\nAdd data to a character column in a specified EK record.\n\nArguments\n\nhandle: EK file handle\nsegno: Index of segment containing record\nrecno: Record to which data is to be added\ncolumn: Column name\ncvals: Character values to add to column\nisnull: Flag indicating whether column entry is null\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekaced-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekaced",
    "category": "method",
    "text": "ekaced(handle, segno, recno, column, dvals, isnull)\n\nAdd data to an double precision column in a specified EK record.\n\nArguments\n\nhandle: EK file handle\nsegno: Index of segment containing record\nrecno: Record to which data is to be added\ncolumn: Column name\ndvals: Double precision values to add to column\nisnull: Flag indicating whether column entry is null\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekacei-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekacei",
    "category": "method",
    "text": "ekacei(handle, segno, recno, column, ivals, isnull)\n\nAdd data to an integer column in a specified EK record.\n\nArguments\n\nhandle: EK file handle\nsegno: Index of segment containing record\nrecno: Record to which data is to be added\ncolumn: Column name\nivals: Integer values to add to column\nisnull: Flag indicating whether column entry is null\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekaclc-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekaclc",
    "category": "method",
    "text": "ekaclc(handle, segno, column, cvals, nlflgs, rcptrs)\n\nAdd an entire character column to an EK segment.\n\nArguments\n\nhandle: EK file handle.\nsegno: Number of segment to add column to.\ncolumn: Column name.\ncvals: Character values to add to column.\nnlflgs: Array of null flags for column entries.\nrcptrs: Record pointers for segment.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekacld-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekacld",
    "category": "method",
    "text": "ekacld(handle, segno, column, dvals, nlflgs, rcptrs)\n\nAdd an entire double precision column to an EK segment.\n\nArguments\n\nhandle: EK file handle\nsegno: Number of segment to add column to\ncolumn: Column name\ndvals: Double precision values to add to column\nnlflgs: Array of null flags for column entries\nrcptrs: Record pointers for segment\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekacli-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekacli",
    "category": "method",
    "text": "ekacli(handle, segno, column, ivals, nlflgs, rcptrs)\n\nAdd an entire integer column to an EK segment.\n\nArguments\n\nhandle: EK file handle\nsegno: Number of segment to add column to\ncolumn: Column name\nivals: Integer values to add to column\nnlflgs: Array of null flags for column entries\nrcptrs: Record pointers for segment\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekappr-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ekappr",
    "category": "method",
    "text": "ekappr(handle, segno)\n\nAppend a new, empty record at the end of a specified E-kernel segment.\n\nArguments\n\nhandle: File handle\nsegno: Segment number\n\nOutput\n\nReturns the number of appended record.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekbseg-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.ekbseg",
    "category": "method",
    "text": "ekbseg(handle, tabnam, cnames, decls)\n\nStart a new segment in an E-kernel.\n\nArguments\n\nhandle: File handle\ntabnam: Table name\ncnames: Names of columns\ndecls: Declarations of columns\n\nOutput\n\nReturns the segment number.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekccnt-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ekccnt",
    "category": "method",
    "text": "ekccnt(table)\n\nReturn the number of distinct columns in a specified, currently loaded table\n\nArguments\n\ntable: Name of table\n\nOutput\n\nReturns the count of distinct, currently loaded columns.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekcii",
    "page": "API",
    "title": "SPICE.ekcii",
    "category": "function",
    "text": "ekcii(table, cindex, lenout=256)\n\nReturn attribute information about a column belonging to a loaded EK table, specifying the column by table and index.\n\nArguments\n\ntable: Name of table containing column\ncindex: Index of column whose attributes are to be found\nlenout: Maximum allowed length of column name (default: 256)\n\nOutput\n\ncolumn: Name of column\nattdsc: Column attribute descriptor\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekcls-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ekcls",
    "category": "method",
    "text": "ekcls(handle)\n\nClose an E-kernel.\n\nArguments\n\nhandle: EK file handle\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekdelr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ekdelr",
    "category": "method",
    "text": "ekdelr(handle, segno, recno)\n\nDelete a specified record from a specified E-kernel segment.\n\nArguments\n\nhandle: File handle\nsegno: Segment number\nrecno: Record number\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekffld-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ekffld",
    "category": "method",
    "text": "ekffld(handle, segno, rcptrs)\n\nComplete a fast write operation on a new E-kernel segment.\n\nArguments\n\nhandle: File handle\nsegno: Segment number\nrcptrs: Record pointers\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekfind",
    "page": "API",
    "title": "SPICE.ekfind",
    "category": "function",
    "text": "ekfind(query, lenout=256)\n\nFind E-kernel data that satisfy a set of constraints.\n\nArguments\n\nquery: Query specifying data to be found.\nlenout: Declared length of output error message string (default: 256)\n\nOutput\n\nReturns the number of matching rows.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekgc",
    "page": "API",
    "title": "SPICE.ekgc",
    "category": "function",
    "text": "ekgc(selidx, row, elment, lenout=256)\n\nReturn an element of an entry in a column of character type in a specified row.\n\nArguments\n\nselidx: Index of parent column in SELECT clause\nrow: Row to fetch from\nelment: Index of element, within column entry, to fetch\nlenout: Maximum length of column element (default: 256)\n\nOutput\n\nReturns the character string element of column entry or missing if it was null or nothing if the column was not found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekgd-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ekgd",
    "category": "method",
    "text": "ekgd(selidx, row, element)\n\nReturn an element of an entry in a column of double precision type in a specified row.\n\nArguments\n\nselidx: Index of parent column in SELECT clause\nrow: Row to fetch from\nelment: Index of element, within column entry, to fetch\n\nOutput\n\nReturns the double precision element of column entry or missing if it was null or nothing if the column was not found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekgi-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ekgi",
    "category": "method",
    "text": "ekgi(selidx, row, element)\n\nReturn an element of an entry in a column of integer type in a specified row.\n\nArguments\n\nselidx: Index of parent column in SELECT clause\nrow: Row to fetch from\nelment: Index of element, within column entry, to fetch\n\nOutput\n\nReturns the integer element of column entry or missing if it was null or nothing if the column was not found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekifld-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.ekifld",
    "category": "method",
    "text": "ekifld(handle, tabnam, nrows, cnames, decls)\n\nInitialize a new E-kernel segment to allow fast writing.\n\nArguments\n\nhandle: File handle\ntabnam: Table name\nnrows: Number of rows in the segment\ncnames: Names of columns\ndecls: Declarations of columns\n\nOutput\n\nsegno: Segment number\nrcptrs: Array of record pointers\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekinsr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ekinsr",
    "category": "method",
    "text": "ekinsr(handle, segno, recno)\n\nAdd a new, empty record to a specified E-kernel segment at a specified index.\n\nArguments\n\nhandle: File handle\nsegno: Segment number\nrecno: Record number\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.eklef-Tuple{Any}",
    "page": "API",
    "title": "SPICE.eklef",
    "category": "method",
    "text": "eklef(fname)\n\nLoad an EK file, making it accessible to the EK readers.\n\nArguments\n\nfname: Name of EK file to load\n\nOutput\n\nReturns the file handle of loaded EK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.eknelt-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.eknelt",
    "category": "method",
    "text": "eknelt(selidx, row)\n\nReturn the number of elements in a specified column entry in the current row.\n\nArguments\n\nselidx: Index of parent column in SELECT clause\nrow: Row containing element\n\nOutput\n\nReturns the number of elements in entry in current row.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.eknseg-Tuple{Any}",
    "page": "API",
    "title": "SPICE.eknseg",
    "category": "method",
    "text": "eknseg(handle)\n\nReturn the number of segments in a specified EK.\n\nArguments\n\nhandle: EK file handle\n\nOutput\n\nReturns the number of segments in the specified E-kernel.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekntab-Tuple{}",
    "page": "API",
    "title": "SPICE.ekntab",
    "category": "method",
    "text": "ekntab()\n\nReturn the number of loaded EK tables.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekopn-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ekopn",
    "category": "method",
    "text": "ekopn(fname, ifname, ncomch)\n\nOpen a new E-kernel file and prepare the file for writing.\n\nArguments\n\nfname: Name of EK file\nifname: Internal file name\nncomch: The number of characters to reserve for comments\n\nOutput\n\nReturn the handle attached to the new EK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekopr-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ekopr",
    "category": "method",
    "text": "ekopr(fname)\n\nOpen an existing E-kernel file for reading.\n\nArguments\n\nfname: Name of EK file\n\nOutput\n\nReturns the handle attached to the EK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekops-Tuple{}",
    "page": "API",
    "title": "SPICE.ekops",
    "category": "method",
    "text": "ekops()\n\nOpen a scratch (temporary) E-kernel file and prepare the file for writing.\n\nOutput\n\nReturns the handle attached to the EK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekopw-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ekopw",
    "category": "method",
    "text": "ekopw(fname)\n\nOpen an existing E-kernel file for writing.\n\nArguments\n\nfname: Name of EK file\n\nOutput\n\nReturns the handle attached to the EK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekpsel",
    "page": "API",
    "title": "SPICE.ekpsel",
    "category": "function",
    "text": "ekpsel(query, msglen=256, tablen=256, collen=256)\n\nParse the SELECT clause of an EK query, returning full particulars concerning each selected item.\n\nArguments\n\nquery: EK query\nmsglen: Available space in the output error message string (default: 256)\ntablen: Length of strings in `tabs\' output array (default: 256)\ncollen: Length of strings in `cols\' output array (default: 256)\n\nOutput\n\nxbegs: Begin positions of expressions in SELECT clause\nxends: End positions of expressions in SELECT clause\nxtypes: Data types of expressions\nxclass: Classes of expressions\ntabs: Names of tables qualifying SELECT columns\ncols: Names of columns in SELECT clause of query\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekrcec",
    "page": "API",
    "title": "SPICE.ekrcec",
    "category": "function",
    "text": "ekrcec(handle, segno, recno, column, lenout=256, nelts=100)\n\nRead data from a character column in a specified EK record.\n\nArguments\n\nhandle: Handle attached to EK file\nsegno: Index of segment containing record\nrecno: Record from which data is to be read\ncolumn: Column name\nlenout: Maximum length of output strings\nnelts: Maximum number of elements to return (default: 100)\n\nOutput\n\nReturns the character values in column entry or missing if they are null.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekrced",
    "page": "API",
    "title": "SPICE.ekrced",
    "category": "function",
    "text": "ekrced(handle, segno, recno, column, nelts=100)\n\nRead data from a double precision column in a specified EK record.\n\nArguments\n\nhandle: Handle attached to EK file\nsegno: Index of segment containing record\nrecno: Record from which data is to be read\ncolumn: Column name\nnelts: Maximum number of elements to return (default: 100)\n\nOutput\n\nReturns the values in column entry.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekrcei",
    "page": "API",
    "title": "SPICE.ekrcei",
    "category": "function",
    "text": "ekrcei(handle, segno, recno, column, nelts=100)\n\nRead data from an integer column in a specified EK record.\n\nArguments\n\nhandle: Handle attached to EK file\nsegno: Index of segment containing record\nrecno: Record from which data is to be read\ncolumn: Column name\nnelts: Maximum number of elements to return (default: 100)\n\nOutput\n\nReturns the values in column entry.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekssum-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ekssum",
    "category": "method",
    "text": "ekssum(handle, segno)\n\nReturn summary information for a specified segment in a specified EK.\n\nArguments\n\nhandle: Handle of EK\nsegno: Number of segment to be summarized\n\nOutput\n\nReturns the EK segment summary.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ektnam",
    "page": "API",
    "title": "SPICE.ektnam",
    "category": "function",
    "text": "ektnam(n, lenout=256)\n\nReturn the name of a specified, loaded table.\n\nArguments\n\nn: Index of table\nlenout: Maximum table name length (default: 256)\n\nOutput\n\nReturns the name of table.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekucec-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekucec",
    "category": "method",
    "text": "ekucec(handle, segno, recno, column, cvals, isnull)\n\nUpdate a character column entry in a specified EK record.\n\nArguments\n\nhandle: EK file handle\nsegno: Index of segment containing record\nrecno: Record to which data is to be updated\ncolumn: Column name\ncvals: Character values comprising new column entry\nisnull: Flag indicating whether column entry is null\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekuced-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekuced",
    "category": "method",
    "text": "ekuced(handle, segno, recno, column, dvals, isnull)\n\nUpdate a double precision column entry in a specified EK record.\n\nArguments\n\nhandle: Handle attached to EK file\nsegno: Index of segment containing record\nrecno: Record in which entry is to be updated\ncolumn: Column name\ndvals: Double precision values comprising new column entry\nisnull: Flag indicating whether column entry is null\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekucei-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ekucei",
    "category": "method",
    "text": "ekucei(handle, segno, recno, column, dvals, isnull)\n\nUpdate a double precision column entry in a specified EK record.\n\nArguments\n\nhandle: Handle attached to EK file\nsegno: Index of segment containing record\nrecno: Record in which entry is to be updated\ncolumn: Column name\ndvals: Double precision values comprising new column entry\nisnull: Flag indicating whether column entry is null\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ekuef-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ekuef",
    "category": "method",
    "text": "ekuef(handle)\n\nUnload an EK file, making its contents inaccessible to the EK reader routines, and clearing space in order to allow other EK files to be loaded.\n\nArguments\n\nhandle: Handle of EK file\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.el2cgv-Tuple{Any}",
    "page": "API",
    "title": "SPICE.el2cgv",
    "category": "method",
    "text": "Convert an ellipse to a center vector and two generating vectors. The selected generating vectors are semi-axes of the ellipse.\n\nArguments\n\nellipse: An ellipse\n\nOutput\n\nReturns the center and semi-axes of ellipse.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.elemc",
    "page": "API",
    "title": "SPICE.elemc",
    "category": "function",
    "text": "elem[c/d/i](item, cell)\n\n!!! warning Deprecated     Use item in cell instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.eqncpv-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.eqncpv",
    "category": "method",
    "text": "eqncpv(et, epoch, eqel, rapol, decpol)\n\nCompute the state (position and velocity of an object whose trajectory is described via equinoctial elements relative to some fixed plane (usually the equatorial plane of some planet).\n\nArguments\n\net: Epoch in seconds past J2000 to find state\nepoch: Epoch of elements in seconds past J2000\neqel: Array of equinoctial elements\nrapol: Right Ascension of the pole of the reference plane\ndecpol: Declination of the pole of the reference plane\n\nOutput\n\nReturns the state of the object described by eqel.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.eqstr-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.eqstr",
    "category": "method",
    "text": "eqstr(a, b)\n\nDetermine whether two strings are equivalent.\n\nArguments\n\na, b: Arbitrary character strings\n\nOutput\n\nReturns true if a and b are equivalent.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.esrchc-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.esrchc",
    "category": "method",
    "text": "esrchc(value, array)\n\nSearch for a given value within a character string array.\n\nArguments\n\nvalue: Key value to be found in array\narray: Character string array to search\n\nOutput\n\nReturns the index of the first equivalent array entry, or -1 if no equivalent element is found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.et2lst",
    "page": "API",
    "title": "SPICE.et2lst",
    "category": "function",
    "text": "et2lst(et, body, lon, typ, timlen=128, ampmlen=128)\n\nGiven an ephemeris epoch, compute the local solar time for an object on the surface of a body at a specified longitude.\n\nArguments\n\net: Epoch in seconds past J2000 epoch\nbody: ID-code of the body of interest\nlon: Longitude of surface point (radians)\ntyp: Type of longitude \"PLANETOCENTRIC\", etc\ntimlen: Available room in output time string (default: 128)\nampmlen: Available room in output `ampm\' string (default: 128)\n\nOutput\n\nhr: Local hour on a \"24 hour\" clock\nmn: Minutes past the hour\nsc: Seconds past the minute\ntime: String giving local time on 24 hour clock\nampm: String giving time on A.M./ P.M. scale\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.et2utc-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.et2utc",
    "category": "method",
    "text": "et2utc(et, format, prec)\n\nConvert an input time from ephemeris seconds past J2000 to Calendar, Day-of-Year, or Julian Date format, UTC.\n\nArguments\n\net: Input epoch, given in ephemeris seconds past J2000\nformat: Format of output epoch. It may be any of the following:\n:C: Calendar format, UTC\n:D: Day-of-Year format, UTC\n:J: Julian Date format, UTC\n:ISOC: ISO Calendar format, UTC\n:ISOD: ISO Day-of-Year format, UTC\nprec: Digits of precision in fractional seconds or days\n\nOutput\n\nReturns an output time string equivalent to the input epoch, in the specified format.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.etcal",
    "page": "API",
    "title": "SPICE.etcal",
    "category": "function",
    "text": "etcal(et, lenout=128)\n\nConvert from an ephemeris epoch measured in seconds past the epoch of J2000 to a calendar string format using a formal calendar free of leapseconds.\n\nArguments\n\net: Ephemeris time measured in seconds past J2000\nlenout: Length of output string (default: 128)\n\nOutput\n\nReturns a standard calendar representation of et.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.eul2m-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.eul2m",
    "category": "method",
    "text": "eul2m(angle3, angle2, angle1, axis3, axis2, axis1)\n\nConstruct a rotation matrix from a set of Euler angles.\n\nArguments\n\nangle3, angle2, angle1: Rotation angles about third, second, and first rotation axes (radians)\naxis3, axis2, axis1: Axis numbers of third, second, and first rotation axes\n\nOutput\n\nA rotation matrix corresponding to the product of the 3 rotations.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.eul2xf-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.eul2xf",
    "category": "method",
    "text": "eul2xf(eulang, axisa, axisb, axisc)\n\nCompute a state transformation from an Euler angle factorization of a rotation and the derivatives of those Euler angles.\n\nArguments\n\neulang: An array of Euler angles and their derivatives\naxisa: Axis A of the Euler angle factorization\naxisb: Axis B of the Euler angle factorization\naxisc: Axis C of the Euler angle factorization\n\nOutput\n\nReturns a state transformation matrix.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.expool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.expool",
    "category": "method",
    "text": "expool(name)\n\nConfirm the existence of a kernel variable in the kernel pool.\n\nArguments\n\nname: Name of the variable whose value is to be returned\n\nOutput\n\nReturns true when the variable is in the pool.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.fovray-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.fovray",
    "category": "method",
    "text": "fovray(inst, raydir, rframe, abcorr, observer, et)\n\nDetermine if a specified ray is within the field-of-view (FOV) of a specified instrument at a given time.\n\nArguments\n\ninst: Name or ID code string of the instrument\nraydir: Ray\'s direction vector\nrframe: Body-fixed, body-centered frame for target body\nabcorr: Aberration correction flag\nobserver: Name or ID code string of the observer\net: Time of the observation (seconds past J2000)\n\nOutput\n\nReturns true if the ray is visible.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.fovtrg-NTuple{7,Any}",
    "page": "API",
    "title": "SPICE.fovtrg",
    "category": "method",
    "text": "fovtrg(inst, target, tshape, tframe, abcorr, obsrvr, et)\n\nDetermine if a specified ephemeris object is within the field-of-view (FOV) of a specified instrument at a given time.\n\nArguments\n\ninst: Name or ID code string of the instrument.\ntarget: Name or ID code string of the target.\ntshape: Type of shape model used for the target.\ntframe: Body-fixed, body-centered frame for target body.\nabcorr: Aberration correction flag.\nobsrvr: Name or ID code string of the observer.\net: Time of the observation (seconds past J2000).\n\nOutput\n\nReturns true if the object is visible.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.frame-Tuple{Any}",
    "page": "API",
    "title": "SPICE.frame",
    "category": "method",
    "text": "frame(x)\n\nGiven a vector x, this routine builds a right handed orthonormal frame x, y, z where the output x is parallel to the input x.\n\nArguments\n\nx: Input vector\n\nOutput\n\nx: Unit vector parallel to x on output\ny: Unit vector in the plane orthogonal to x\nz: Unit vector given by x × y\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.frinfo-Tuple{Any}",
    "page": "API",
    "title": "SPICE.frinfo",
    "category": "method",
    "text": "frinfo(frcode)\n\nRetrieve the minimal attributes associated with a frame needed for converting transformations to and from it.\n\nArguments\n\nfrcode: The id code for a reference frame\n\nOutput\n\ncent: The center of the frame\nfrclss: The class (type) of the frame\nclssid: The idcode for the frame within its class\n\nReturns nothing if no frame with id frcode could be found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.frmnam-Tuple{Any}",
    "page": "API",
    "title": "SPICE.frmnam",
    "category": "method",
    "text": "frmnam(frcode)\n\nRetrieve the name of a reference frame associated with an id code.\n\nArguments\n\nfrcode: The id code for a reference frame\n\nOutput\n\nReturns the name associated with the reference frame.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.furnsh-Tuple",
    "page": "API",
    "title": "SPICE.furnsh",
    "category": "method",
    "text": "furnsh(kernels...)\n\nLoad one or more SPICE kernels into a program.\n\nArguments\n\nkernels: Path(s) of SPICE kernels to load\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.gcpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.gcpool",
    "category": "method",
    "text": "gcpool(name; start=1, room=100, lenout=128)\n\nReturn the value of a kernel variable from the kernel pool.\n\nArguments\n\nname: Name of the variable whose value is to be returned\nstart: Which component to start retrieving for name (default: 1)\nroom: The largest number of values to return (default: 100)\nlenout: The length of the longest string to return (default: 128)\n\nOutput\n\nReturns an array of values if the variable exists or nothing if not.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.gdpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.gdpool",
    "category": "method",
    "text": "gdpool(name; start=1, room=100)\n\nReturn the value of a kernel variable from the kernel pool.\n\nArguments\n\nname: Name of the variable whose value is to be returned\nstart: Which component to start retrieving for name (default: 1)\nroom: The largest number of values to return (default: 100)\n\nOutput\n\nReturns an array of values if the variable exists or nothing if not.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.georec-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.georec",
    "category": "method",
    "text": "georec(lon, lat, alt, re, f)\n\nConvert geodetic coordinates to rectangular coordinates.\n\nArguments\n\nlon: Geodetic longitude of point (radians)\nlat: Geodetic latitude  of point (radians)\nalt: Altitude of point above the reference spheroid\nre: Equatorial radius of the reference spheroid\nf: Flattening coefficient\n\nOutput\n\nReturns the rectangular coordinates of point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.getelm-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.getelm",
    "category": "method",
    "text": "getelm(frstyr, lines)\n\nGiven the \"lines\" of a two-line element set, parse the lines and return the elements in units suitable for use in SPICE software.\n\nArguments\n\nfrstyr: Year of earliest representable two-line elements\nlines: A pair of \"lines\" containing two-line elements\n\nOutput\n\nepoch: The epoch of the elements in seconds past J2000\nelems: The elements converted to SPICE units\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.getfat",
    "page": "API",
    "title": "SPICE.getfat",
    "category": "function",
    "text": "getfat(file, arclen=10, typlen=10)\n\nDetermine the file architecture and file type of most SPICE kernel files.\n\nArguments\n\nfile: The name of a file to be examined\narclen: Maximum length of output architecture string (default: 10)\ntyplen: Maximum length of output type string (default: 10)\n\nOutput\n\narch: The architecture of the kernel file\ntyp: The type of the kernel file\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.getfov",
    "page": "API",
    "title": "SPICE.getfov",
    "category": "function",
    "text": "getfov(instid, room=10, shapelen=128, framelen=128)\n\nReturn the field-of-view (FOV) parameters for a specified instrument. The instrument is specified by its NAIF ID code.\n\nArguments\n\ninstid: NAIF ID of an instrument\nroom: Maximum number of vectors that can be returned (default: 10)\nshapelen: Space available in the string shape (default: 128)\nframelen: Space available in the string frame (default: 128)\n\nOutput\n\nReturns a tuple consisting of\n\nshape: Instrument FOV shape\nframe: Name of the frame in which FOV vectors are defined\nbsight: Boresight vector\nbounds: FOV boundary vectors\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.gfpa!-NTuple{11,Any}",
    "page": "API",
    "title": "SPICE.gfpa!",
    "category": "method",
    "text": "gfpa!(cnfine, result, target, illmn, abcorr, obsrvr, relate, refval, adjust, step, nintvls)\n\nDetermine time intervals for which a specified constraint on the phase angle between an illumination source, a target, and observer body centers is met.\n\nArguments\n\ncnfine: Window to which the search is confined\ntarget: Name of the target body\nillmn: Name of the illuminating body\nabcorr: Aberration correction flag\nobsrvr: Name of the observing body\nrelate: Relational operator\nrefval: Reference value\nadjust: Adjustment value for absolute extrema searches\nstep: Step size used for locating extrema and roots\nnintvls: Workspace window interval count\n\nOutput\n\nReturns a tuple consisting of\n\ncnfine: Window to which the search is confined.\nresult: Window containing results.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.gipool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.gipool",
    "category": "method",
    "text": "gipool(name; start=1, room=100)\n\nReturn the value of a kernel variable from the kernel pool.\n\nArguments\n\nname: Name of the variable whose value is to be returned\nstart: Which component to start retrieving for name (default: 1)\nroom: The largest number of values to return (default: 100)\n\nOutput\n\nReturns an array of values if the variable exists or nothing if not.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.gnpool",
    "page": "API",
    "title": "SPICE.gnpool",
    "category": "function",
    "text": "gnpool(name, start, room, lenout=128)\n\nReturn names of kernel variables matching a specified template.\n\nArguments\n\nname: Template that names should match\nstart: Index of first matching name to retrieve\nroom: The largest number of values to return\nlenout: Length of strings in output array kvars (default: 128)\n\nOutput\n\nReturns lernel pool variables whose names match name.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.halfpi",
    "page": "API",
    "title": "SPICE.halfpi",
    "category": "function",
    "text": "halfpi()\n\nwarning: Deprecated\nUse π/2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.hrmint-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.hrmint",
    "category": "method",
    "text": "hrmint(xvals, yvals, x)\n\nEvaluate a Hermite interpolating polynomial at a specified abscissa value.\n\nArguments\n\nxvals: Abscissa values\nyvals: Ordinate and derivative values\nx: Point at which to interpolate the polynomial\n\nOutput\n\nf: Interpolated function value at x\ndf: Interpolated function\'s derivative at x\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.hx2dp-Tuple{Any}",
    "page": "API",
    "title": "SPICE.hx2dp",
    "category": "method",
    "text": "hx2dp(str)\n\nConvert a string representing a double precision number in a base 16 \"scientific notation\" into its equivalent double precision number.\n\nArguments\n\nstr: Hex form string to convert to double precision\n\nOutput\n\ndp: Double precision value to be returned\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.illumf-NTuple{8,Any}",
    "page": "API",
    "title": "SPICE.illumf",
    "category": "method",
    "text": "illumf(method, target, ilusrc, et, fixref, abcorr, obsrvr, spoint)\n\nCompute the illumination angles - phase, incidence, and emission - at a specified point on a target body. Return logical flags indicating whether the surface point is visible from the observer\'s position and whether the surface point is illuminated.\n\nThe target body\'s surface is represented using topographic data provided by DSK files, or by a reference ellipsoid.\n\nThe illumination source is a specified ephemeris object.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\nilusrc: Name of illumination source\net: Epoch in TDB seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nabcorr: Aberration correction flag\nobsrvr: Name of observing body\nspoint: Body-fixed coordinates of a target surface point\n\nOutput\n\ntrgepc: Target surface point epoch\nsrfvec: Vector from observer to target surface point\nphase: Phase angle at the surface point\nincdnc: Source incidence angle at the surface point\nemissn: Emission angle at the surface point\nvisibl: Visibility flag (true if visible)\nlit: Illumination flag (true if illuminated)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.illumg-NTuple{7,Any}",
    "page": "API",
    "title": "SPICE.illumg",
    "category": "method",
    "text": "illumg(method, target, ilusrc, et, fixref, obsrvr, spoint, abcorr)\n\nFind the illumination angles (phase, incidence, and emission) at a specified surface point of a target body.\n\nThe surface of the target body may be represented by a triaxial ellipsoid or by topographic data provided by DSK files.\n\nThe illumination source is a specified ephemeris object.\n\nArguments\n\nmethod: Computation method.\ntarget: Name of target body.\nilusrc: Name of illumination source.\net: Epoch in ephemeris seconds past J2000 TDB.\nfixref: Body-fixed, body-centered target body frame.\nobsrvr: Name of observing body.\nspoint: Body-fixed coordinates of a target surface point.\nabcorr: Aberration correction.\n\nOutput\n\ntrgepc: Sub-solar point epoch.\nsrfvec: Vector from observer to sub-solar point.\nphase: Phase angle at the surface point.\nincdnc: Solar incidence angle at the surface point.\nemissn: Emission angle at the surface point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ilumin-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.ilumin",
    "category": "method",
    "text": "ilumin(method, target, et, fixref, obsrvr, spoint, abcorr)\n\nFind the illumination angles (phase, solar incidence, and emission) at a specified surface point of a target body.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\net: Epoch in ephemeris seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nobsrvr: Name of observing body\nspoint: Body-fixed coordinates of a target surface point\nabcorr: Aberration correction\n\nOutput\n\ntrgepc: Sub-solar point epoch\nsrfvec: Vector from observer to sub-solar point\nphase: Phase angle at the surface point\nincdnc: Solar incidence angle at the surface point\nemissn: Emission angle at the surface point\n\nReferences\n\n[NAIF Documentation](https://naif.jpl.nasa.gov/pub/naif/toolkitdocs/C/cspice/iluminc.html\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.inedpl-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.inedpl",
    "category": "method",
    "text": "inedpl(a, b, c, plane)\n\nFind the intersection of a triaxial ellipsoid and a plane.\n\nArguments\n\na: Length of ellipsoid semi-axis lying on the x-axis\nb: Length of ellipsoid semi-axis lying on the y-axis\nc: Length of ellipsoid semi-axis lying on the z-axis\nplane: Plane that intersects ellipsoid\n\nOutput\n\nellipse: Intersection ellipse\n\nReturns nothing if no ellipse could be found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.inelpl-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.inelpl",
    "category": "method",
    "text": "inelpl(ellips, plane)\n\nFind the intersection of an ellipse and a plane.\n\nArguments\n\nellips: An ellipse\nplane: A plane\n\nOutput\n\nnxpts: Number of intersection points of ellipse and plane\nxpt1, xpt2: Intersection points\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.inrypl-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.inrypl",
    "category": "method",
    "text": "inrypl(vertex, dir, plane)\n\nFind the intersection of a ray and a plane.\n\nArguments\n\nvertex, dir: Vertex and direction vector of ray\nplane: A plane\n\nOutput\n\nnxpts: Number of intersection points of ray and plane\nxpt1, xpt2: Intersection points\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.insrtc!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.insrtc!",
    "category": "method",
    "text": "insrtc!(set, item)\n\nInsert an item into a character set.\n\nArguments\n\nset: Insertion set\nitem: Item to be inserted\n\nOutput\n\nReturns the updated set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.insrtd!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.insrtd!",
    "category": "method",
    "text": "insrtd!(set, item)\n\nInsert an item into a double set.\n\nArguments\n\nset: Insertion set\nitem: Item to be inserted\n\nOutput\n\nReturns the updated set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.insrti!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.insrti!",
    "category": "method",
    "text": "insrti!(set, item)\n\nInsert an item into an integer set.\n\nArguments\n\nset: Insertion set\nitem: Item to be inserted\n\nOutput\n\nReturns the updated set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.inter-Union{Tuple{T}, Tuple{SpiceCell{T,T1,N} where N where T1,SpiceCell{T,T1,N} where N where T1}} where T",
    "page": "API",
    "title": "SPICE.inter",
    "category": "method",
    "text": "inter(a, b)\n\nIntersect two sets of any data type to form a third set.\n\nArguments\n\na: First input set\nb: Second input set\n\nOutput\n\nReturns intersection of a and b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.intmax",
    "page": "API",
    "title": "SPICE.intmax",
    "category": "function",
    "text": "intmax()\n\n!!! warning Deprecated     Use typemax(Cint) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.intmin",
    "page": "API",
    "title": "SPICE.intmin",
    "category": "function",
    "text": "intmin()\n\n!!! warning Deprecated     Use typemin(Cint) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.invert",
    "page": "API",
    "title": "SPICE.invert",
    "category": "function",
    "text": "invert(matrix)\n\n!!! warning Deprecated     Use inv(matrix) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.invort",
    "page": "API",
    "title": "SPICE.invort",
    "category": "function",
    "text": "invort(matrix)\n\n!!! warning Deprecated     Use inv(matrix) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.isordv",
    "page": "API",
    "title": "SPICE.isordv",
    "category": "function",
    "text": "isordv(vec)\n\n!!! warning Deprecated     Use isperm(vec) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.isrchc",
    "page": "API",
    "title": "SPICE.isrchc",
    "category": "function",
    "text": "isrchc(value, array)\n\n!!! warning Deprecated     Use findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.isrchd",
    "page": "API",
    "title": "SPICE.isrchd",
    "category": "function",
    "text": "isrchd(value, array)\n\n!!! warning Deprecated     Use findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.isrchi",
    "page": "API",
    "title": "SPICE.isrchi",
    "category": "function",
    "text": "isrchi(value, array)\n\n!!! warning Deprecated     Use findfirst(array .== value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.isrot-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.isrot",
    "category": "method",
    "text": "isrot(m, ntol, dtol)\n\nIndicate whether a 3x3 matrix is a rotation matrix.\n\nArguments\n\nm: A matrix to be tested\nntol: Tolerance for the norms of the columns of m\ndtol: Tolerance for the determinant of a matrix whose columns are the unitized columns of m\n\nOutput\n\nReturns true if m is a rotation matrix.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.iswhsp",
    "page": "API",
    "title": "SPICE.iswhsp",
    "category": "function",
    "text": "iswhsp(str)\n\n!!! warning Deprecated     Use isempty(strip(str)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.j1900-Tuple{}",
    "page": "API",
    "title": "SPICE.j1900",
    "category": "method",
    "text": "j1900()\n\nReturns the Julian Date of 1899 DEC 31 12:00:00 (1900 JAN 0.5).\n\nhttps://naif.jpl.nasa.gov/pub/naif/toolkitdocs/C/cspice/j1900c.html\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.j1950-Tuple{}",
    "page": "API",
    "title": "SPICE.j1950",
    "category": "method",
    "text": "j1950()\n\nReturns the Julian Date of 1950 JAN 01 00:00:00 (1950 JAN 1.0).\n\nhttps://naif.jpl.nasa.gov/pub/naif/toolkitdocs/C/cspice/j1950c.html\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.j2000-Tuple{}",
    "page": "API",
    "title": "SPICE.j2000",
    "category": "method",
    "text": "j2000()\n\nReturns the Julian Date of 2000 JAN 01 12:00:00 (2000 JAN 1.5).\n\nhttps://naif.jpl.nasa.gov/pub/naif/toolkitdocs/C/cspice/j2000c.html\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.j2100-Tuple{}",
    "page": "API",
    "title": "SPICE.j2100",
    "category": "method",
    "text": "j2100()\n\nReturns the Julian Date of 2100 JAN 01 12:00:00 (2100 JAN 1.5).\n\nhttps://naif.jpl.nasa.gov/pub/naif/toolkitdocs/C/cspice/j2100c.html\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.jyear-Tuple{}",
    "page": "API",
    "title": "SPICE.jyear",
    "category": "method",
    "text": "jyear()\n\nReturns the number of seconds per Julian year.\n\nhttps://naif.jpl.nasa.gov/pub/naif/toolkitdocs/C/cspice/jyearc.html\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.kclear-Tuple{}",
    "page": "API",
    "title": "SPICE.kclear",
    "category": "method",
    "text": "kclear()\n\nClear the KEEPER subsystem: unload all kernels, clear the kernel pool, and re-initialize the subsystem. Existing watches on kernel variables are retained.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.kdata",
    "page": "API",
    "title": "SPICE.kdata",
    "category": "function",
    "text": "kdata(which, kind, fillen=1024, srclen=256)\n\nReturn data for the n-th kernel that is among a list of specified kernel types.\n\nArguments\n\nwhich: Index of kernel to fetch from the list of kernels\nkind: The kind of kernel to which fetches are limited\nfillen: Available space in output file string\nsrclen: Available space in output source string\n\nOutput\n\nReturns nothing if no kernel was found or a tuple consisting of\n\nfile: The name of the kernel file\nfiltyp: The type of the kernel\nsource: Name of the source file used to load file\nhandle: The handle attached to file\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.kinfo",
    "page": "API",
    "title": "SPICE.kinfo",
    "category": "function",
    "text": "kinfo(file, srclen=256)\n\nArguments\n\nfile: Name of a kernel to fetch information for\nsrclen: Available space in output source string\n\nOutput\n\nReturns nothing if no kernel was found or a tuple consisting of\n\nfiltyp: The type of the kernel\nsource: Name of the source file used to load file\nhandle: The handle attached to file\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.kplfrm",
    "page": "API",
    "title": "SPICE.kplfrm",
    "category": "function",
    "text": "kplfrm(frmcls)\n\nReturn a SPICE set containing the frame IDs of all reference frames of a given class having specifications in the kernel pool.\n\nArguments\n\nfrmcls: Frame class\nsize: Size of the output set\n\nOutput\n\nReturns the set of ID codes of frames of the specified class.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ktotal-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ktotal",
    "category": "method",
    "text": "ktotal(kind)\n\nReturn the current number of kernels that have been loaded via the KEEPER interface that are of a specified type.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.kxtrct",
    "page": "API",
    "title": "SPICE.kxtrct",
    "category": "function",
    "text": "kxtrct(keywd, terms, string)\n\nLocate a keyword in a string and extract the substring from the beginning of the first word following the keyword to the beginning of the first subsequent recognized terminator of a list.\n\nArguments\n\nkeywd: Word that marks the beginning of text of interest\nterms: Set of words, any of which marks the end of text\nstring: String containing a sequence of words\n\nOutput\n\nReturns nothing if keywd was found or a tuple consisting of\n\nstring: The input string with the text of interest removed\nsubstr: String from end of keywd to beginning of first terms item found\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lastnb",
    "page": "API",
    "title": "SPICE.lastnb",
    "category": "function",
    "text": "lastnb(str)\n\n!!! warning Deprecated     Use findprev(!isspace, str, length(str)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.latcyl-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.latcyl",
    "category": "method",
    "text": "latcyl(radius, lon, lat)\n\nConvert from latitudinal coordinates to cylindrical coordinates.\n\nArguments\n\nradius: Distance of a point from the origin\nlon: Angle of the point from the XZ plane in radians\nlat: Angle of the point from the XY plane in radians\n\nOutput\n\nReturn the tuple (r, lonc, z).\n\nr: Distance of the point from the z axis\nlonc: Angle of the point from the XZ plane in radians. \'lonc\' is set equal to \'lon\'\nz: Height of the point above the XY plane\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.latrec-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.latrec",
    "category": "method",
    "text": "latrec(radius, lon, lat)\n\nConvert from latitudinal coordinates to rectangular coordinates.\n\nArguments\n\nradius: Distance of a point from the origin\nlon: Angle of the point from the XZ plane in radians\nlat: Angle of the point from the XY plane in radians\n\nOutput\n\nReturn the rectangular coordinates vector of the point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.latsph-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.latsph",
    "category": "method",
    "text": "latsph(radius, lon, lat)\n\nConvert from latitudinal coordinates to rectangular coordinates.\n\nArguments\n\nradius: Distance of a point from the origin\nlon: Angle of the point from the XZ plane in radians\nlat: Angle of the point from the XY plane in radians\n\nOutput\n\nReturn the tuple (rho, colat, lons).\n\nrho: Distance of the point from the origin\ncolat: Angle of the point from positive z axis (radians)\nlons: Angle of the point from the XZ plane (radians)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.latsrf-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.latsrf",
    "category": "method",
    "text": "latsrf(method, target, et, fixref, npts, lonlat)\n\nMap array of planetocentric longitude/latitude coordinate pairs to surface points on a specified target body.\n\nThe surface of the target body may be represented by a triaxial ellipsoid or by topographic data provided by DSK files.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\net: Epoch in TDB seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nlonlat: Array of longitude/latitude coordinate pairs\n\nOutput\n\nReturns an array of surface points.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lcase",
    "page": "API",
    "title": "SPICE.lcase",
    "category": "function",
    "text": "lcase(in)\n\nwarning: Deprecated\nUse lowercase(in) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ldpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.ldpool",
    "category": "method",
    "text": "ldpool(kernel)\n\nLoad the variables contained in a NAIF ASCII kernel file into the kernel pool.\n\nArguments\n\nkernel: Name of the kernel file\n\nOutput\n\nNone\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lgrind-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.lgrind",
    "category": "method",
    "text": "lgrind(xvals, yvals, x)\n\nEvaluate a Lagrange interpolating polynomial for a specified set of coordinate pairs, at a specified abscissa value. Return the value of both polynomial and derivative.\n\nArguments\n\nxvals: Abscissa values of coordinate pairs\nyvals: Ordinate values of coordinate pairs\nx: Point at which to interpolate the polynomial\n\nOutput\n\np: The value at x of the unique polynomial of      degree n-1 that fits the points in the plane      defined by xvals and yvals\ndp: The derivative at x of the interpolating       polynomial described above\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.limbpt-NTuple{13,Any}",
    "page": "API",
    "title": "SPICE.limbpt",
    "category": "method",
    "text": "limbpt(method, target, et, fixref, abcorr, corloc, obsrvr, refvec, rolstp, ncuts, schstp,\n       soltol, maxn)\n\nFind limb points on a target body. The limb is the set of points of tangency on the target of rays emanating from the observer.  The caller specifies half-planes bounded by the observer-target center vector in which to search for limb points.\n\nThe surface of the target body may be represented either by a triaxial ellipsoid or by topographic data.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\net: Epoch in ephemeris seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nabcorr: Aberration correction\ncorloc: Aberration correction locus\nobsrvr: Name of observing body\nrefvec: Reference vector for cutting half-planes\nrolstp: Roll angular step for cutting half-planes\nncuts: Number of cutting half-planes\nschstp: Angular step size for searching\nsoltol: Solution convergence tolerance\nmaxn: Maximum number of entries in output arrays\n\nOutput\n\nReturns the tuple (npts, points, epochs, tangts).\n\nnpts: Counts of limb points corresponding to cuts\npoints: Limb points\nepochs: Times associated with limb points\ntangts: Tangent vectors emanating from the observer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lmpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.lmpool",
    "category": "method",
    "text": "lmpool(cvals)\n\nLoad the variables contained in an internal buffer into the kernel pool.\n\nArguments\n\ncvals: An array that contains a SPICE text kernel\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lparse",
    "page": "API",
    "title": "SPICE.lparse",
    "category": "function",
    "text": "lparse(list, delim, nmax)\n\n!!! warning Deprecated     Use split(list, delim, limit=nmax) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lparsm",
    "page": "API",
    "title": "SPICE.lparsm",
    "category": "function",
    "text": "lparsm(list, delims, nmax)\n\n!!! warning Deprecated     Use split(list, delim, limit=nmax, keepempty=false) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lparss",
    "page": "API",
    "title": "SPICE.lparss",
    "category": "function",
    "text": "lparss(list, delims)\n\n!!! warning Deprecated     Use Set(split(list, collect(delim))) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lspcn-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.lspcn",
    "category": "method",
    "text": "lspcn(body, et, abcorr)\n\nCompute L_s, the planetocentric longitude of the sun, as seen from a specified body.\n\nArguments\n\nbody: Name of the central body\net: Epoch in seconds past J2000 TDB\nabcorr: Aberration correction\n\nOutput\n\nReturns the planetocentric longitude of the sun for the specified body at the specified time in radians.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lstlec",
    "page": "API",
    "title": "SPICE.lstlec",
    "category": "function",
    "text": "lstlecd(x, array)\n\n!!! warning Deprecated     Use findfirst(item .<= array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lstled",
    "page": "API",
    "title": "SPICE.lstled",
    "category": "function",
    "text": "lstle[di](x, array)\n\n!!! warning Deprecated     Use searchsortedlast(array, x) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lstltc",
    "page": "API",
    "title": "SPICE.lstltc",
    "category": "function",
    "text": "lstltcd(x, array)\n\n!!! warning Deprecated     Use findfirst(item .< array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lstltd",
    "page": "API",
    "title": "SPICE.lstltd",
    "category": "function",
    "text": "lstlt[di](x, array)\n\n!!! warning Deprecated     Use searchsortedlast(array, x, lt=<=) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ltime-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.ltime",
    "category": "method",
    "text": "ltime(etobs, obs, dir, targ)\n\nThis routine computes the transmit (or receive) time of a signal at a specified target, given the receive (or transmit) time at a specified observer. The elapsed time between transmit and receive is also returned.\n\nArguments\n\netobs: Epoch of a signal at some observer\nobs: NAIF ID of some observer\ndir: Direction the signal travels ( \"->\" or \"<-\" )\ntarg: Time between transmit and receipt of the signal\n\nOutput\n\nettarg: Epoch of the signal at the target\nobs: NAIF ID of some observer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lx4dec-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.lx4dec",
    "category": "method",
    "text": "lx4dec(string, first)\n\nScan a string from a specified starting position for the end of a decimal number.\n\nArguments\n\nstring: Any character string\nfirst: First character to scan from in string\n\nOutput\n\nlast: Last character that is part of a decimal number. If there is no such         character, last will be returned with the value first-1.\nnchar: Number of characters in the decimal number\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lx4num-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.lx4num",
    "category": "method",
    "text": "lx4num(string, first)\n\nScan a string from a specified starting position for the end of a number.\n\nArguments\n\nstring: Any character string\nfirst: First character to scan from in string\n\nOutput\n\nlast: Last character that is part of a number. If there is no such         character, last will be returned with the value first-1.\nnchar: Number of characters in the number\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lx4sgn-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.lx4sgn",
    "category": "method",
    "text": "lx4sgn(string, first)\n\nScan a string from a specified starting position for the end of a signed integer.\n\nArguments\n\nstring: Any character string\nfirst: First character to scan from in string\n\nOutput\n\nlast: Last character that is part of a signed integer. If there is no such         character, last will be returned with the value first-1.\nnchar: Number of characters in the signed integer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lx4uns-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.lx4uns",
    "category": "method",
    "text": "lx4uns(string, first)\n\nScan a string from a specified starting position for the end of a unsigned integer.\n\nArguments\n\nstring: Any character string\nfirst: First character to scan from in string\n\nOutput\n\nlast: Last character that is part of an unsigned integer. If there is no such         character, last will be returned with the value first-1.\nnchar: Number of characters in the unsigned integer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.lxqstr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.lxqstr",
    "category": "method",
    "text": "lxqstr(string, qchar, first)\n\nLex (scan) a quoted string.\n\nArguments\n\nstring: String to be scanned\nqchar: Quote delimiter character\nfirst: Character position at which to start scanning\n\nOutput\n\nlast: Character position of end of token\nnchar: Number of characters in token\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.m2eul-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.m2eul",
    "category": "method",
    "text": "m2eul(r, axis3, axis2, axis1)\n\nFactor a rotation matrix as a product of three rotations about specified coordinate axes.\n\nArguments\n\nr: A rotation matrix to be factored\naxis3: Number of the third rotation axis\naxis2: Number of the second rotation axis\naxis1: Number of the first rotation axis\n\nOutput\n\nA tuple consisting of the third, second, and first Euler angles in radians.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.m2q-Tuple{Any}",
    "page": "API",
    "title": "SPICE.m2q",
    "category": "method",
    "text": "m2q(r)\n\nFind a unit quaternion corresponding to a specified rotation matrix.\n\nArguments\n\nr: A rotation matrix\n\nOutput\n\nA unit quaternion representing `r\'\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.matchi-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.matchi",
    "category": "method",
    "text": "matchi(string, templ, wstr, wchar)\n\nDetermine whether a string is matched by a template containing wild cards. The pattern comparison is case-insensitive.\n\nArguments\n\nstring: String to be tested\ntempl: Template (with wild cards) to test against string\nwstr: Wild string token\nwchr: Wild character token\n\nOutput\n\nReturns true if the string matches.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.matchw-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.matchw",
    "category": "method",
    "text": "matchw(string, templ, wstr, wchar)\n\nDetermine whether a string is matched by a template containing wild cards.\n\nArguments\n\nstring: String to be tested\ntempl: Template (with wild cards) to test against string\nwstr: Wild string token\nwchr: Wild character token\n\nOutput\n\nReturns true if the string matches.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.maxd",
    "page": "API",
    "title": "SPICE.maxd",
    "category": "function",
    "text": "maxd(args...)\n\nwarning: Deprecated\nUse max(args...) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.maxi",
    "page": "API",
    "title": "SPICE.maxi",
    "category": "function",
    "text": "maxi(args...)\n\nwarning: Deprecated\nUse max(args...) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mequ",
    "page": "API",
    "title": "SPICE.mequ",
    "category": "function",
    "text": "mequ(m1, mout)\n\nwarning: Deprecated\nUse mout .= m1 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mequg",
    "page": "API",
    "title": "SPICE.mequg",
    "category": "function",
    "text": "mequg(m1, mout)\n\nwarning: Deprecated\nUse mout .= m1 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mind",
    "page": "API",
    "title": "SPICE.mind",
    "category": "function",
    "text": "mind(args...)\n\nwarning: Deprecated\nUse min(args...) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mini",
    "page": "API",
    "title": "SPICE.mini",
    "category": "function",
    "text": "mini(args...)\n\nwarning: Deprecated\nUse min(args...) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mtxm",
    "page": "API",
    "title": "SPICE.mtxm",
    "category": "function",
    "text": "mtxm(m1, m2)\n\nwarning: Deprecated\nUse m1\' * m2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mtxmg",
    "page": "API",
    "title": "SPICE.mtxmg",
    "category": "function",
    "text": "mtxmg(m1, m2)\n\nwarning: Deprecated\nUse m1\' * m2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mtxv",
    "page": "API",
    "title": "SPICE.mtxv",
    "category": "function",
    "text": "mtxv(m1,v2)\n\nwarning: Deprecated\nUse m1\' * v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mtxvg",
    "page": "API",
    "title": "SPICE.mtxvg",
    "category": "function",
    "text": "mtxvg(m1,v2)\n\nwarning: Deprecated\nUse m1\' * v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mxm",
    "page": "API",
    "title": "SPICE.mxm",
    "category": "function",
    "text": "mxm(m1, m2)\n\nwarning: Deprecated\nUse m1 * m2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mxmg",
    "page": "API",
    "title": "SPICE.mxmg",
    "category": "function",
    "text": "mxmg(m1, m2)\n\nwarning: Deprecated\nUse m1 * m2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mxmt",
    "page": "API",
    "title": "SPICE.mxmt",
    "category": "function",
    "text": "mxmt(m1, m2)\n\nwarning: Deprecated\nUse m1 * m2\' instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mxmtg",
    "page": "API",
    "title": "SPICE.mxmtg",
    "category": "function",
    "text": "mxmtg(m1, m2)\n\nwarning: Deprecated\nUse m1 * m2\' instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mxv",
    "page": "API",
    "title": "SPICE.mxv",
    "category": "function",
    "text": "mxv(m1,v2)\n\nwarning: Deprecated\nUse m1 * v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.mxvg",
    "page": "API",
    "title": "SPICE.mxvg",
    "category": "function",
    "text": "mxvg(m1,v2)\n\nwarning: Deprecated\nUse m1 * v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.namfrm-Tuple{Any}",
    "page": "API",
    "title": "SPICE.namfrm",
    "category": "method",
    "text": "namfrm(frname)\n\nLook up the frame ID code associated with a string.\n\nArguments\n\nfrname: The name of some reference frame\n\nOutput\n\nThe SPICE ID code of the frame.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ncpos-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ncpos",
    "category": "method",
    "text": "ncpos(str, chars, start)\n\nFind the first occurrence in a string of a character NOT belonging to a collection of characters, starting at a specified location, searching forward.\n\nArguments\n\nstr: A string\nchars: A collection of characters\nstart: Position to begin looking for a character not in chars\n\nOutput\n\nReturns the index of the first character of str at or following index start that is not in the collection chars.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ncposr-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.ncposr",
    "category": "method",
    "text": "ncposr(str, chars, start)\n\nFind the first occurrence in a string of a character NOT belonging to a collection of characters, starting at a specified location, searching in reverse.\n\nArguments\n\nstr: A string\nchars: A collection of characters\nstart: Position to begin looking for a character not in chars\n\nOutput\n\nReturns the index of the last character of str at or before index start that is not in the collection chars.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.nearpt-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.nearpt",
    "category": "method",
    "text": "nearpt(positn, a, b, c)\n\nThis routine locates the point on the surface of an ellipsoid that is nearest to a specified position. It also returns the altitude of the position above the ellipsoid.\n\nArguments\n\npositn: Position of a point in the bodyfixed frame\na: Length of semi-axis parallel to x-axis\nb: Length of semi-axis parallel to y-axis\nc: Length on semi-axis parallel to z-axis\n\nOutput\n\nReturns a tuple consisting of npoint and alt.\n\nnpoint: Point on the ellipsoid closest to positn\nalt: Altitude of positn above the ellipsoid\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.npedln-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.npedln",
    "category": "method",
    "text": "npedln(a, b, c, linept, linedr)\n\nFind nearest point on a triaxial ellipsoid to a specified line, and the distance from the ellipsoid to the line.\n\nArguments\n\na: Length of semi-axis in the x direction\nb: Length of semi-axis in the y direction\nc: Length of semi-axis in the z direction\nlinept: Point on line\nlinedr: Direction vector of line\n\nOutput\n\nReturns a tuple consisting of pnear and dist.\n\npnear: Nearest point on ellipsoid to line\ndist: Distance of ellipsoid from line\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.npelpt-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.npelpt",
    "category": "method",
    "text": "npelpt(point, ellips)\n\nFind the nearest point on an ellipse to a specified point, both in three-dimensional space, and find the distance between the ellipse and the point.\n\nArguments\n\npoint: Point whose distance to an ellipse is to be found\nellips: A SPICE ellipse\n\nOutput\n\nReturns a tuple consisting of pnear and dist.\n\npnear: Nearest point on ellipse to input point\ndist: Distance of input point to ellipse\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.nplnpt-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.nplnpt",
    "category": "method",
    "text": "nplnpt(linept, linedr, point)\n\nFind the nearest point on a line to a specified point, and find the distance between the two points.\n\nArguments\n\nlinept: Point on line\nlinedr: Direction vector of line\npoint: A second point\n\nOutput\n\nReturns a tuple consisting of pnear and dist.\n\npnear: Nearest point on the line to point\ndist: Distance between point and pnear\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.nvc2pl-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.nvc2pl",
    "category": "method",
    "text": "nvc2pl(norm, point)\n\nMake a SPICE plane from a normal vector and a point.\n\nArguments\n\nnorm: A normal vector...\nconstant: ...and a constant defining a plane\n\nOutput\n\nReturns a struct representing the plane.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.nvp2pl-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.nvp2pl",
    "category": "method",
    "text": "nvp2pl(norm, point)\n\nMake a SPICE plane from a normal vector and a point.\n\nArguments\n\nnorm: A normal vector...\npoint: ...and a point defining a plane\n\nOutput\n\nReturns a struct representing the plane.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.occult-NTuple{9,Any}",
    "page": "API",
    "title": "SPICE.occult",
    "category": "method",
    "text": "occult(targ1, shape1, frame1, targ2, shape2, frame2, abcorr, obsrvr, et)\n\nDetermines the occultation condition (not occulted, partially, etc.) of one target relative to another target as seen by an observer at a given time.\n\nThe surfaces of the target bodies may be represented by triaxial ellipsoids or by topographic data provided by DSK files.\n\nArguments\n\ntarg1: Name or ID of first target.\nshape1: Type of shape model used for first target.\nframe1: Body-fixed, body-centered frame for first body.\ntarg2: Name or ID of second target.\nshape2: Type of shape model used for second target.\nframe2: Body-fixed, body-centered frame for second body.\nabcorr: Aberration correction flag.\nobsrvr: Name or ID of the observer.\net: Time of the observation (seconds past J2000).\n\nOutput\n\nReturns the occultation identification code.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ordc-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ordc",
    "category": "method",
    "text": "ordc(set, item)\n\nThe function returns the ordinal position of any given item in a character set.\n\nArguments\n\nset: A set to search for a given item\nitem: An item to locate within a set\n\nOutput\n\nReturns the ordinal position or nothing if the items does not appear in the set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ordd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ordd",
    "category": "method",
    "text": "ordd(set, item)\n\nThe function returns the ordinal position of any given item in a character set.\n\nArguments\n\nset: A set to search for a given item\nitem: An item to locate within a set\n\nOutput\n\nReturns the ordinal position or nothing if the items does not appear in the set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.orderc",
    "page": "API",
    "title": "SPICE.orderc",
    "category": "function",
    "text": "orderc(array)\n\n!!! warning Deprecated     Use sortperm instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.orderd",
    "page": "API",
    "title": "SPICE.orderd",
    "category": "function",
    "text": "orderd(array)\n\n!!! warning Deprecated     Use sortperm instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.orderi",
    "page": "API",
    "title": "SPICE.orderi",
    "category": "function",
    "text": "orderi(array)\n\n!!! warning Deprecated     Use sortperm instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ordi-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.ordi",
    "category": "method",
    "text": "ordi(set, item)\n\nThe function returns the ordinal position of any given item in a character set.\n\nArguments\n\nset: A set to search for a given item\nitem: An item to locate within a set\n\nOutput\n\nReturns the ordinal position or nothing if the items does not appear in the set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.oscelt-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.oscelt",
    "category": "method",
    "text": "oscelt(state, et, mu)\n\nDetermine the set of osculating conic orbital elements that corresponds to the state (position, velocity) of a body at some epoch.\n\nArguments\n\nstate: State of body at epoch of elements\net: Epoch of elements\nmu: Gravitational parameter (GM) of primary body\n\nOutput\n\nReturns the equivalent conic elements:\n\nrp: Perifocal distance\necc: Eccentricity\ninc: Inclination\nlnode: Longitude of the ascending node\nargp: Argument of periapsis\nm0: Mean anomaly at epoch\nt0: Epoch\nmu: Gravitational parameter\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.oscltx-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.oscltx",
    "category": "method",
    "text": "oscltx(state, et, mu)\n\nDetermine the set of osculating conic orbital elements that corresponds to the state (position, velocity) of a body at some epoch. In addition to the classical elements, return the true anomaly, semi-major axis, and period, if applicable.\n\nArguments\n\nstate: State of body at epoch of elements\net: Epoch of elements\nmu: Gravitational parameter (GM) of primary body\n\nOutput\n\nReturns the extended set of classical conic elements:\n\nrp: Perifocal distance.\necc: Eccentricity.\ninc: Inclination.\nlnode: Longitude of the ascending node.\nargp: Argument of periapsis.\nm0: Mean anomaly at epoch.\nt0: Epoch.\nmu: Gravitational parameter.\nnu: True anomaly at epoch.\na: Semi-major axis. A is set to zero if it is not computable.\ntau: Orbital period. Applicable only for elliptical orbits. Set to zero otherwise.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pckcls-Tuple{Any}",
    "page": "API",
    "title": "SPICE.pckcls",
    "category": "method",
    "text": "pckcls(handle)\n\nClose an open PCK file.\n\nArguments\n\nhandle: Handle of the PCK file to be closed\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pckcov!-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.pckcov!",
    "category": "method",
    "text": "pckcov!(cover, pck, idcode)\n\nFind the coverage window for a specified reference frame in a specified binary PCK file.\n\nArguments\n\ncover: An initalized window SpiceDoubleCell\npck: Path of PCK file\nidcode: Class ID code of PCK reference frame\n\nOutput\n\nReturns cover containing coverage in pck for idcode\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pckfrm!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pckfrm!",
    "category": "method",
    "text": "pckfrm!(ids, pck)\n\nFind the set of reference frame class ID codes of all frames in a specified binary PCK file.\n\nArguments\n\nids: An initalized SpiceIntCell\npck: Path of PCK file\n\nOutput\n\nReturns ids containing a set of frame class ID codes of frames in PCK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pcklof-Tuple{Any}",
    "page": "API",
    "title": "SPICE.pcklof",
    "category": "method",
    "text": "pcklof(filename)\n\nLoad a binary PCK file for use by the readers. Return the handle of the loaded file which is used by other PCK routines to refer to the file.\n\nArguments\n\nfilename: Path of the PCK file\n\nOutput\n\nReturns an integer handle.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pckopn-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.pckopn",
    "category": "method",
    "text": "pckopn(name, ifname, ncomch)\n\nCreate a new PCK file, returning the handle of the opened file.\n\nArguments\n\nname: The name of the PCK file to be opened\nifname: The internal filename for the PCK\nncomch: The number of characters to reserve for comments\n\nOutput\n\nReturns the handle of the opened PCK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pckuof-Tuple{Any}",
    "page": "API",
    "title": "SPICE.pckuof",
    "category": "method",
    "text": "pckuof(handle)\n\nUnload a binary PCK file so that it will no longer be searched by the readers.\n\nArguments\n\nhandle: Integer handle of a PCK file\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pckw02-NTuple{9,Any}",
    "page": "API",
    "title": "SPICE.pckw02",
    "category": "method",
    "text": "pckw02(handle, clssid, frame, first, last, segid, intlen, cdata, btime)\n\nWrite a type 2 segment to a PCK binary file given the file handle, frame class ID, base frame, time range covered by the segment, and the Chebyshev polynomial coefficients.\n\nArguments\n\nhandle: Handle of binary PCK file open for writing.\nclssid: Frame class ID of body-fixed frame.\nframe: Name of base reference frame.\nfirst: Start time of interval covered by segment.\nlast: End time of interval covered by segment.\nsegid: Segment identifier.\nintlen: Length of time covered by logical record.\ncdata: Array of Chebyshev coefficients.\nbtime: Begin time of first logical record.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pcpool-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pcpool",
    "category": "method",
    "text": "pcpool(name, vals)\n\nInsert character data into the kernel pool.\n\nArguments\n\nname: The kernel pool name to associate with vals\nvals: An array of values to insert into the kernel pool\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pdpool-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pdpool",
    "category": "method",
    "text": "pdpool(name, vals)\n\nInsert double precision data into the kernel pool.\n\nArguments\n\nname: The kernel pool name to associate with vals\nvals: An array of values to insert into the kernel pool\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pgrrec-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.pgrrec",
    "category": "method",
    "text": "pgrrec(body, lon, lat, alt, re, f)\n\nConvert planetographic coordinates to rectangular coordinates.\n\nArguments\n\nbody: Body with which coordinate system is associated.\nlon: Planetographic longitude of a point (radians).\nlat: Planetographic latitude of a point (radians).\nalt: Altitude of a point above reference spheroid.\nre: Equatorial radius of the reference spheroid.\nf: Flattening coefficient.\n\nOutput\n\nReturns the rectangular coordinates of the point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.phaseq-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.phaseq",
    "category": "method",
    "text": "phaseq(et, target, illmn, obsrvr, abcorr)\n\nCompute the apparent phase angle for a target, observer, illuminator set of ephemeris objects.\n\nArguments\n\net: Ephemeris seconds past J2000 TDB\ntarget: Target body name\nillmn: Illuminating body name\nobsrvr: Observer body\nabcorr: Aberration correction flag\n\nOutput\n\nReturns the value of the phase angle.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pipool-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pipool",
    "category": "method",
    "text": "pipool(name, ivals)\n\nInsert integer data into the kernel pool.\n\nArguments\n\nname: The kernel pool name to associate with the values\nivals: An array of integers to insert into the pool\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pjelpl-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pjelpl",
    "category": "method",
    "text": "pjelpl(elin, plane)\n\nProject an ellipse onto a plane, orthogonally.\n\nArguments\n\nelin: An ellipse to be projected\nplane: A plane onto which elin is to be projected\n\nOutput\n\nReturns the ellipse resulting from the projection.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pl2nvc-Tuple{Any}",
    "page": "API",
    "title": "SPICE.pl2nvc",
    "category": "method",
    "text": "pl2nvc(plane)\n\nReturn a unit normal vector and constant that define a specified plane.\n\nArguments\n\nplane: A plane\n\nOutput\n\nReturns a tuple consisting of\n\nnormal: A normal vector and...\nconstant: ... constant defining the geometric plane represented by plane\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pl2nvp-Tuple{Any}",
    "page": "API",
    "title": "SPICE.pl2nvp",
    "category": "method",
    "text": "pl2nvp(plane)\n\nReturn a unit normal vector and point that define a specified plane.\n\nArguments\n\nplane: A plane\n\nOutput\n\nReturns a tuple consisting of\n\nnormal: A normal vector and...\npoint: ... point defining the geometric plane represented by plane\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pl2psv-Tuple{Any}",
    "page": "API",
    "title": "SPICE.pl2psv",
    "category": "method",
    "text": "pl2psv(plane)\n\nReturn a point and two orthogonal spanning vectors that define a specified plane.\n\nArguments\n\nplane: A plane\n\nOutput\n\nReturns a tuple consisting of a point in the plane and two vectors spanning the input plane.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pltar-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pltar",
    "category": "method",
    "text": "pltar(vrtces, plates)\n\nCompute the total area of a collection of triangular plates.\n\nArguments\n\nvrtces: Array of vertices\nplates: Array of plates\n\nOutput\n\nReturns the area.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pltexp-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pltexp",
    "category": "method",
    "text": "pltexp(iverts, delta)\n\nExpand a triangular plate by a specified amount. The expanded plate is co-planar with, and has the same orientation as, the original. The centroids of the two plates coincide.\n\nArguments\n\niverts: Vertices of the plate to be expanded\ndelta: Fraction by which the plate is to be expanded\n\nOutput\n\nReturns the vertices of the expanded plate.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pltnp-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.pltnp",
    "category": "method",
    "text": "pltnp(point, v1, v2, v3)\n\nFind the nearest point on a triangular plate to a given point.\n\nArguments\n\npoint: A point in 3-dimensional space.\nv1, v2, v3: Vertices of a triangular plate\n\nOutput\n\nReturns a tuple consisting of\n\npnear: Nearest point on the plate to point\ndist: Distance between pnear and point\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pltnrm-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.pltnrm",
    "category": "method",
    "text": "pltnrm(v1, v2, v3)\n\nCompute an outward normal vector of a triangular plate.  The vector does not necessarily have unit length.\n\nArguments\n\nv1, v2, v3: Vertices of a plate\n\nOutput\n\nReturns the plate\'s outward normal vector.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pltvol-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.pltvol",
    "category": "method",
    "text": "pltvol(vrtces, plates)\n\nCompute the volume of a three-dimensional region bounded by a collection of triangular plates.\n\nArguments\n\nvrtces: Array of vertices\nplates: Array of plates\n\nOutput\n\nReturns the volume of the spatial region bounded by the plates.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.polyds-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.polyds",
    "category": "method",
    "text": "polyds(coeffs, nderiv, t)\n\nCompute the value of a polynomial and it\'s first nderiv derivatives at the value t.\n\nArguments\n\ncoeffs: Coefficients of the polynomial to be evaluated\nnderiv: Number of derivatives to compute\nt: Point to evaluate the polynomial and derivatives\n\nOutput\n\nReturns the value of the polynomial and the derivatives as an array.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pos",
    "page": "API",
    "title": "SPICE.pos",
    "category": "function",
    "text": "pos(str, substr, start)\n\nwarning: Deprecated\nUse first(findnext(substr, str, start)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.posr",
    "page": "API",
    "title": "SPICE.posr",
    "category": "function",
    "text": "posr(str, substr, start)\n\nwarning: Deprecated\nUse first(findprev(substr, str, start)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.prop2b-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.prop2b",
    "category": "method",
    "text": "prop2b(gm, pvinit, dt)\n\nGiven a central mass and the state of massless body at time t_0, this routine determines the state as predicted by a two-body force model at time t_0 + dt.\n\nArguments\n\ngm: Gravity of the central mass.\npvinit: Initial state from which to propagate a state.\ndt: Time offset from initial state to propagate to.\n\nOutput\n\nReturns the propagated state.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.prsdp",
    "page": "API",
    "title": "SPICE.prsdp",
    "category": "function",
    "text": "prsdp(str)\n\nwarning: Deprecated\nUse parse(Float64, str) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.prsint",
    "page": "API",
    "title": "SPICE.prsint",
    "category": "function",
    "text": "prsint(str)\n\nwarning: Deprecated\nUse parse(Int, str) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.psv2pl-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.psv2pl",
    "category": "method",
    "text": "psv2pl(point, span1, span2)\n\nMake a plane from a point and two spanning vectors.\n\nArguments\n\npoint, span1, span2: A point and two spanning vectors defining a plane\n\nOutput\n\nReturns the plane.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pxform-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.pxform",
    "category": "method",
    "text": "pxform(from, to, et)\n\nReturn the matrix that transforms position vectors from one specified frame to another at a specified epoch.\n\nArguments\n\nfrom: Name of the frame to transform from\nto: Name of the frame to transform to\net: Epoch of the rotation matrix\n\nOutput\n\nReturns the rotation matrix.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.pxfrm2-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.pxfrm2",
    "category": "method",
    "text": "pxfrm2(from, to, etfrom, etto)\n\nReturn the 3x3 matrix that transforms position vectors from one specified frame at a specified epoch to another specified frame at another specified epoch.\n\nArguments\n\nfrom: Name of the frame to transform from\nto: Name of the frame to transform to\netfrom: Evaluation time of from frame\netto: Evaluation time of to frame\n\nOutput\n\nReturns a position transformation matrix from frame from to frame to.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.q2m-Tuple{Any}",
    "page": "API",
    "title": "SPICE.q2m",
    "category": "method",
    "text": "q2m(q)\n\nFind the rotation matrix corresponding to a specified unit quaternion.\n\nArguments\n\nq: A unit quaternion\n\nOutput\n\nA rotation matrix corresponding to q.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.qdq2av-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.qdq2av",
    "category": "method",
    "text": "qdq2av(q, dq)\n\nDerive angular velocity from a unit quaternion and its derivative with respect to time.\n\nArguments\n\nq: Unit SPICE quaternion (as any kind of iterable with four elements)\ndq: Derivative of `q\' with respect to time\n\nOutput\n\nAngular velocity vector defined by q\' anddq\'\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.qxq-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.qxq",
    "category": "method",
    "text": "qxq(q1, q2)\n\nMultiply two quaternions.\n\nArguments\n\nq1: First SPICE quaternion factor (as any kind of iterable with four elements)\nq2: Second SPICE quaternion factor (as any kind of iterable with four elements)\n\nOutput\n\nA quaternion corresponding to the product of q1\' andq2\'\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.radrec-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.radrec",
    "category": "method",
    "text": "radrec(range, ra, dec)\n\nConvert from range, right ascension, and declination to rectangular coordinates.\n\nArguments\n\nrange: Distance of a point from the origin\nra: Right ascension of point in radians\ndec: Declination of point in radians\n\nOutput\n\nReturns the rectangular coordinates of the point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.rav2xf-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.rav2xf",
    "category": "method",
    "text": "rav2xf(rot, av)\n\nDetermine a state transformation matrix from a rotation matrix and the angular velocity of the rotation.\n\nArguments\n\nrot: Rotation matrix\nav: Angular velocity vector\n\nOutput\n\nReturns state transformation matrix associated with rot and av.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.raxisa-Tuple{Any}",
    "page": "API",
    "title": "SPICE.raxisa",
    "category": "method",
    "text": "raxisa(matrix)\n\nCompute the axis of the rotation given by an input matrix and the angle of the rotation about that axis.\n\nArguments\n\nmatrix: A 3x3 rotation matrix\n\nOutput\n\naxis: Axis of the rotation\nangle: Angle through which the rotation is performed\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.reccyl-Tuple{Any}",
    "page": "API",
    "title": "SPICE.reccyl",
    "category": "method",
    "text": "reccyl(rectan)\n\nConvert from rectangular to cylindrical coordinates.\n\nArguments\n\nrectan: Rectangular coordinates of a point\n\nOutput\n\nr: Distance of the point from the Z axis\nlon: Angle (radians) of the point from the XZ plane\nz: Height of the point above the XY plane\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.recgeo-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.recgeo",
    "category": "method",
    "text": "recgeo(rectan, re, f)\n\nConvert from rectangular coordinates to geodetic coordinates.\n\nArguments\n\nrectan: Rectangular coordinates of a point\nre: Equatorial radius of the reference spheroid\nf: Flattening coefficient\n\nOutput\n\nlon: Geodetic longitude of the point (radians)\nlat: Geodetic latitude  of the point (radians)\nalt: Altitude of the point above reference spheroid\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.reclat-Tuple{Any}",
    "page": "API",
    "title": "SPICE.reclat",
    "category": "method",
    "text": "reclat(rectan)\n\nConvert from rectangular coordinates to latitudinal coordinates.\n\nArguments\n\nrectan: Rectangular coordinates of a point\n\nOutput\n\nReturns a tuple consisting of:\n\nrad: Distance of the point from the origin\nlon: Planetographic longitude of the point (radians)\nlat: Planetographic latitude of the point (radians)\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.recpgr-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.recpgr",
    "category": "method",
    "text": "recpgr(body, rectan, re, f)\n\nConvert rectangular coordinates to planetographic coordinates.\n\nArguments\n\nbody: Body with which coordinate system is associated\nrectan: Rectangular coordinates of a point\nre: Equatorial radius of the reference spheroid\nf: flattening coefficient\n\nOutput\n\nlon: Planetographic longitude of the point (radians).\nlat: Planetographic latitude of the point (radians).\nalt: Altitude of the point above reference spheroid.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.recrad-Tuple{Any}",
    "page": "API",
    "title": "SPICE.recrad",
    "category": "method",
    "text": "recrad(rectan)\n\nConvert rectangular coordinates to range, right ascension, and declination.\n\nArguments\n\nrectan: Rectangular coordinates of a point\n\nOutput\n\nReturn the tuple (range, ra, dec).\n\nrange: Distance of the point from the origin\nra: Right ascension in radians\ndec: Declination in radians\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.recsph-Tuple{Any}",
    "page": "API",
    "title": "SPICE.recsph",
    "category": "method",
    "text": "recsph(rectan)\n\nConvert from rectangular coordinates to spherical coordinates.\n\nArguments\n\nrectan: Rectangular coordinates of a point\n\nOutput\n\nr: Distance of the point from the origin\ncolat: Angle of the point from the Z-axis in radian\nlon: Longitude of the point in radians\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.removc!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.removc!",
    "category": "method",
    "text": "removc!(set, item)\n\nRemove an item from a character set.\n\nArguments\n\nset: A set\nitem: Item to be removed\n\nOutput\n\nReturns the updated set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.removd!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.removd!",
    "category": "method",
    "text": "removd!(set, item)\n\nRemove an item from a double set.\n\nArguments\n\nset: A set\nitem: Item to be removed\n\nOutput\n\nReturns the updated set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.removi!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.removi!",
    "category": "method",
    "text": "removi!(set, item)\n\nRemove an item from a character set.\n\nArguments\n\nset: A set\nitem: Item to be removed\n\nOutput\n\nReturns the updated set.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.reordc",
    "page": "API",
    "title": "SPICE.reordc",
    "category": "function",
    "text": "reordc(iorder, array)\n\n!!! warning Deprecated     Use array[iorder] instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.reordd",
    "page": "API",
    "title": "SPICE.reordd",
    "category": "function",
    "text": "reordd(iorder, array)\n\n!!! warning Deprecated     Use array[iorder] instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.reordi",
    "page": "API",
    "title": "SPICE.reordi",
    "category": "function",
    "text": "reordi(iorder, array)\n\n!!! warning Deprecated     Use array[iorder] instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.reordl",
    "page": "API",
    "title": "SPICE.reordl",
    "category": "function",
    "text": "reordl(iorder, array)\n\n!!! warning Deprecated     Use array[iorder] instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.repmc",
    "page": "API",
    "title": "SPICE.repmc",
    "category": "function",
    "text": "repmc(input, marker, value)\n\n!!! warning Deprecated     Use replace(input, marker=>value) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.repmct",
    "page": "API",
    "title": "SPICE.repmct",
    "category": "function",
    "text": "repmct\n\n!!! warning Deprecated     Use replace instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.repmd",
    "page": "API",
    "title": "SPICE.repmd",
    "category": "function",
    "text": "repmd\n\n!!! warning Deprecated     Use replace instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.repmf",
    "page": "API",
    "title": "SPICE.repmf",
    "category": "function",
    "text": "repmf\n\n!!! warning Deprecated     Use replace instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.repmi",
    "page": "API",
    "title": "SPICE.repmi",
    "category": "function",
    "text": "repmi\n\n!!! warning Deprecated     Use replace instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.repmot",
    "page": "API",
    "title": "SPICE.repmot",
    "category": "function",
    "text": "repmot\n\n!!! warning Deprecated     Use replace instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.rotate-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.rotate",
    "category": "method",
    "text": "rotate(angle, iaxis)\n\nCalculate the 3x3 rotation matrix generated by a rotation of a specified angle about a specified axis. This rotation is thought of as rotating the coordinate system.\n\nArguments\n\nangle: Angle of rotation (radians)\niaxis: Axis of rotation (X=1, Y=2, Z=3)\n\nOutput\n\nReturns rotation matrix associated with angle and iaxis.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.rotmat-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.rotmat",
    "category": "method",
    "text": "rotmat(m1, angle, iaxis)\n\nApplies a rotation of angle radians about axis iaxis to a matrix m1. This rotation is thought of as rotating the coordinate system.\n\nArguments\n\nm1: Matrix to be rotated\nangle: Angle of rotation (radians)\niaxis: Axis of rotation (X=1, Y=2, Z=3)\n\nOutput\n\nReturns the resulting rotated matrix.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.rotvec-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.rotvec",
    "category": "method",
    "text": "rotvec(v1, angle, iaxis)\n\nTransform a vector to a new coordinate system rotated by angle radians about axis iaxis. This transformation rotates v1 by -angle radians about the specified axis.\n\nArguments\n\nv1: Vector whose coordinate system is to be rotated\nangle: Angle of rotation in radians\niaxis: Axis of rotation (X=1, Y=2, Z=3)\n\nOutput\n\nReturns the resulting vector expressed in the new coordinate system.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.rpd",
    "page": "API",
    "title": "SPICE.rpd",
    "category": "function",
    "text": "rpd()\n\n!!! warning Deprecated     Use deg2rad instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.rquad-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.rquad",
    "category": "method",
    "text": "rquad(a, b, c)\n\nFind the roots of a quadratic equation.\n\nArguments\n\na: Coefficient of quadratic term\nb: Coefficient of linear term\nc: Constant\n\nOutput\n\nroot1: Root built from positive discriminant term\nroot2: Root built from negative discriminant term\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.saelgv-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.saelgv",
    "category": "method",
    "text": "saelgv(vec1, vec2)\n\nFind semi-axis vectors of an ellipse generated by two arbitrary three-dimensional vectors.\n\nArguments\n\nvec1, vec2: Two vectors used to generate an ellipse\n\nOutput\n\nsmajor: Semi-major axis of ellipse\nsminor: Semi-minor axis of ellipse\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.scard!-Union{Tuple{T}, Tuple{SpiceCell{T,T1,N} where N where T1,Any}} where T",
    "page": "API",
    "title": "SPICE.scard!",
    "category": "method",
    "text": "scard!(cell::SpiceCell{T}, card) where T\n\nSet the cardinality of a cell.\n\nArguments\n\ncell: The cell\ncard: Cardinality of (number of elements in) the cell\n\nOutput\n\nReturns cell with its cardinality set to card.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.scdecd",
    "page": "API",
    "title": "SPICE.scdecd",
    "category": "function",
    "text": "scdecd(sc, sclkdp, lenout=128)\n\nConvert double precision encoding of spacecraft clock time into a character representation.\n\nArguments\n\nsc: NAIF spacecraft identification code\nsclkdp: Encoded representation of a spacecraft clock count\nlenout: Maximum allowed length of output SCLK string\n\nOutput\n\nReturns the character representation of a clock count.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sce2c-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.sce2c",
    "category": "method",
    "text": "sce2c(sc, et)\n\nConvert ephemeris seconds past J2000 (ET) to continuous encoded spacecraft clock (\"ticks\"). Non-integral tick values may be returned.\n\nArguments\n\nsc: NAIF spacecraft ID code\net: Ephemeris time, seconds past J2000\n\nOutput\n\nReturns SCLK, encoded as ticks since spacecraft clock start.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sce2s",
    "page": "API",
    "title": "SPICE.sce2s",
    "category": "function",
    "text": "sce2s(sc, et, lenout=128)\n\nConvert an epoch specified as ephemeris seconds past J2000 (ET) to a character string representation of a spacecraft clock value (SCLK).\n\nArguments\n\nsc: NAIF spacecraft identification code\net: Ephemeris time, specified as seconds past J2000\nlenout: Maximum allowed length of output SCLK string\n\nOutput\n\nReturns an SCLK string.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sce2t-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.sce2t",
    "category": "method",
    "text": "sce2t(sc, et)\n\nConvert ephemeris seconds past J2000 (ET) to integral encoded spacecraft clock (\"ticks\"). For conversion to fractional ticks, (required for C-kernel production), see the routine sce2c.\n\nArguments\n\nsc: NAIF spacecraft ID code\net: Ephemeris time, seconds past J2000\n\nOutput\n\nReturns SCLK, encoded as ticks since spacecraft clock start.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.scencd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.scencd",
    "category": "method",
    "text": "scencd(sc, sclkch)\n\nEncode character representation of spacecraft clock time into a double precision number.\n\nArguments\n\nsc: NAIF spacecraft identification code\nsclkch: Character representation of a spacecraft clock\n\nOutput\n\nReturns the encoded representation of the clock count.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.scfmt",
    "page": "API",
    "title": "SPICE.scfmt",
    "category": "function",
    "text": "scfmt(sc, ticks, lenout=128)\n\nConvert encoded spacecraft clock ticks to character clock format.\n\nArguments\n\nsc: NAIF spacecraft identification code\nticks: Encoded representation of a spacecraft clock count\nlenout: Maximum allowed length of output string\n\nOutput\n\nReturns a character representation of a clock count.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.scpart-Tuple{Any}",
    "page": "API",
    "title": "SPICE.scpart",
    "category": "method",
    "text": "scpart(sc)\n\nGet spacecraft clock partition information from a spacecraft clock kernel file.\n\nArguments\n\nsc: NAIF spacecraft identification code\n\nOutput\n\npstart: Array of partition start times\npstop: Array of partition stop times\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.scs2e-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.scs2e",
    "category": "method",
    "text": "scs2e(sc, sclkch)\n\nConvert a spacecraft clock string to ephemeris seconds past J2000 (ET).\n\nArguments\n\nsc: NAIF integer code for a spacecraft\nsclkch: An SCLK string\n\nOutput\n\nReturns ephemeris time seconds past J2000.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sct2e-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.sct2e",
    "category": "method",
    "text": "sct2e(sc, sclkdp)\n\nConvert encoded spacecraft clock (\"ticks\") to ephemeris seconds past J2000 (ET).\n\nArguments\n\nsc: NAIF integer code for a spacecraft\nsclkdp: SCLK, encoded as ticks since spacecraft clock start.\n\nOutput\n\nReturns ephemeris time seconds past J2000.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sctiks-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.sctiks",
    "category": "method",
    "text": "sctiks(sc, clkstr)\n\nConvert a spacecraft clock format string to number of \"ticks\".\n\nArguments\n\nsc: NAIF spacecraft identification code\nclkstr: Character representation of a spacecraft clock\n\nOutput\n\nReturns the number of ticks represented by the clock string.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sdiff-Union{Tuple{T}, Tuple{SpiceCell{T,T1,N} where N where T1,SpiceCell{T,T1,N} where N where T1}} where T",
    "page": "API",
    "title": "SPICE.sdiff",
    "category": "method",
    "text": "sdiff(a::T, b::T) where T <: SpiceCell\n\nCompute the symmetric difference of two sets of any data type to form a third set.\n\nArguments\n\na: First input set\nb: Second input set\n\nOutput\n\nReturns a cell containing the symmetric difference of a and b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.set-Union{Tuple{T}, Tuple{SpiceCell{T,T1,N} where N where T1,Any,SpiceCell{T,T1,N} where N where T1}} where T",
    "page": "API",
    "title": "SPICE.set",
    "category": "method",
    "text": "set(a::T, b::T) where T <: SpiceCell\n\nGiven a relational operator, compare two sets of any data type.\n\nArguments\n\na: First set\nop: Comparison operator\nb: Second set\n\nOutput\n\nReturns the result of the comparison: a (op) b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.shellc",
    "page": "API",
    "title": "SPICE.shellc",
    "category": "function",
    "text": "shellc(array)\n\nwarning: Deprecated\nUse sort!(array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.shelld",
    "page": "API",
    "title": "SPICE.shelld",
    "category": "function",
    "text": "shelld(array)\n\nwarning: Deprecated\nUse sort!(array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.shelli",
    "page": "API",
    "title": "SPICE.shelli",
    "category": "function",
    "text": "shelli(array)\n\nwarning: Deprecated\nUse sort!(array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sincpt-NTuple{8,Any}",
    "page": "API",
    "title": "SPICE.sincpt",
    "category": "method",
    "text": "sincpt(method, target, et, fixref, abcorr, obsrvr, dref, dvec)\n\nGiven an observer and a direction vector defining a ray, compute the surface intercept of the ray on a target body at a specified epoch, optionally corrected for light time and stellar aberration.\n\nThe surface of the target body may be represented by a triaxial ellipsoid or by topographic data provided by DSK files.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\net: Epoch in TDB seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nabcorr: Aberration correction flag\nobsrvr: Name of observing body\ndref: Reference frame of ray\'s direction vector\ndvec: Ray\'s direction vector\n\nOutput\n\nReturns a tuple consisting of the following data or nothing if no intercept was found.\n\nspoint: Surface intercept point on the target body\ntrgepc: Intercept epoch\nsrfvec: Vector from observer to intercept point\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.size_c-Tuple{Any}",
    "page": "API",
    "title": "SPICE.size_c",
    "category": "method",
    "text": "size_c(cell::SpiceCell)\n\nReturns the maximum number of elements that cell can hold.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spd-Tuple{}",
    "page": "API",
    "title": "SPICE.spd",
    "category": "method",
    "text": "spd()\n\nReturns the number of seconds in a day.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sphcyl-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.sphcyl",
    "category": "method",
    "text": "sphcyl(radius, colat, slon)\n\nConverts from spherical coordinates to cylindrical coordinates.\n\nArguments\n\nradius: Distance of point from origin\ncolat: Polar angle (co-latitude in radians) of point\nslon: Azimuthal angle (longitude) of point (radians)\n\nOutput\n\nr: Distance of point from Z axis\nlon: Angle (radians) of point from XZ plane\nz: Height of point above XY plane\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sphlat-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.sphlat",
    "category": "method",
    "text": "sphlat(r, colat, lons)\n\nConvert from spherical coordinates to latitudinal coordinates.\n\nArguments\n\nr: Distance of the point from the origin\ncolat: Angle of the point from positive z axis (radians)\nlons: Angle of the point from the XZ plane (radians)\n\nOutput\n\nradius: Distance of a point from the origin\nlon: Angle of the point from the XZ plane in radians\nlat: Angle of the point from the XY plane in radians\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sphrec-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.sphrec",
    "category": "method",
    "text": "sphrec(r, colat, lon)\n\nConvert from spherical coordinates to rectangular coordinates.\n\nArguments\n\nr: Distance of a point from the origin\ncolat: Angle of the point from the Z-axis in radians\nlon: Angle of the point from the XZ plane in radians\n\nOutput\n\nReturns the rectangular coordinates of the point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spk14a-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.spk14a",
    "category": "method",
    "text": "spk14a(handle, ncsets, coeffs, epochs)\n\nAdd data to a type 14 SPK segment associated with handle. See also spk14b and spk14e.\n\nArguments\n\nhandle: The handle of an SPK file open for writing\nncsets: The number of coefficient sets and epochs\ncoeffs: The collection of coefficient sets\nepochs: The epochs associated with the coefficient sets\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spk14b-NTuple{8,Any}",
    "page": "API",
    "title": "SPICE.spk14b",
    "category": "method",
    "text": "spk14b(handle, segid, body, center, frame, first, last, chbdeg)\n\nBegin a type 14 SPK segment in the SPK file associated with handle. See also spk14a and spk14e.\n\nArguments\n\nhandle: The handle of an SPK file open for writing\nsegid: The string to use for segment identifier\nbody: The NAIF ID code for the body of the segment\ncenter: The center of motion for body\nframe: The reference frame for this segment\nfirst: The first epoch for which the segment is valid\nlast: The last epoch for which the segment is valid\nchbdeg: The degree of the Chebyshev Polynomial used\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spk14e-Tuple{Any}",
    "page": "API",
    "title": "SPICE.spk14e",
    "category": "method",
    "text": "spk14e(handle)\n\nEnd the type 14 SPK segment currently being written to the SPK file associated with handle. See also spk14a and spk14b.\n\nArguments\n\nhandle: The handle of an SPK file open for writing\n\nOutput\n\nReturns the handle of the SPK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkacs-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.spkacs",
    "category": "method",
    "text": "spkacs(targ, et, ref, abcorr, obs, starg, lt, dlt)\n\nReturn the state (position and velocity) of a target body relative to an observer, optionally corrected for light time and stellar aberration, expressed relative to an inertial reference frame.\n\nArguments\n\ntarg: Target body\net: Observer epoch\nref: Inertial reference frame of output state\nabcorr: Aberration correction flag\nobs: Observer\n\nOutput\n\nstarg: State of target\nlt: One way light time between observer and target\ndlt: Derivative of light time with respect to time\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkapo-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.spkapo",
    "category": "method",
    "text": "spkapo(targ, et, ref, sobs, abcorr)\n\nReturn the position of a target body relative to an observer, optionally corrected for light time and stellar aberration.\n\nArguments\n\ntarg: Target body\net: Observer epoch\nref: Inertial reference frame of observer\'s state\nsobs: State of observer wrt. solar system barycenter\nabcorr: Aberration correction flag\n\nOutput\n\nptarg: Position of target\nlt: One way light time between observer and target\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkaps-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.spkaps",
    "category": "method",
    "text": "spkaps(targ, et, ref, abcorr, stobs, accobs)\n\nGiven the state and acceleration of an observer relative to the solar system barycenter, return the state (position and velocity) of a target body relative to the observer, optionally corrected for light time and stellar aberration. All input and output vectors are expressed relative to an inertial reference frame.\n\nUsers normally should call the high-level API routines spkezr or spkez rather than this routine.\n\nArguments\n\ntarg: Target body.\net: Observer epoch.\nref: Inertial reference frame of output state.\nabcorr: Aberration correction flag.\nstobs: State of the observer relative to the SSB.\naccobs: Acceleration of the observer relative to the SSB.\n\nOutput\n\nstarg: State of target.\nlt: One way light time between observer and target.\ndlt: Derivative of light time with respect to time.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkcls-Tuple{Any}",
    "page": "API",
    "title": "SPICE.spkcls",
    "category": "method",
    "text": "spkcls(handle)\n\nClose an open SPK file.\n\nArguments\n\nhandle: Handle of the SPK file to be closed\n\nOutput\n\nReturns the handle of the closed file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkcov",
    "page": "API",
    "title": "SPICE.spkcov",
    "category": "function",
    "text": "spkcov!(cover, spk, idcode)\nspkcov(spk, idcode)\n\nFind the coverage window for a specified ephemeris object in a specified SPK file.\n\nArguments\n\ncover: Window giving coverage in spk for idcode\nspk: Name of the SPK file\nidcode: ID code of ephemeris object\n\nOutput\n\nReturns the extended coverage window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkcpo-NTuple{8,Any}",
    "page": "API",
    "title": "SPICE.spkcpo",
    "category": "method",
    "text": "spkcpo(target, et, outref, refloc, abcorr, obspos, obsctr, obsref)\n\nReturn the state of a specified target relative to an \"observer,\" where the observer has constant position in a specified reference frame. The observer\'s position is provided by the calling program rather than by loaded SPK files.\n\nArguments\n\ntarget: Name of target ephemeris object\net: Observation epoch\noutref: Reference frame of output state\nrefloc: Output reference frame evaluation locus\nabcorr: Aberration correction\nobspos: Observer position relative to center of motion\nobsctr: Center of motion of observer\nobsref: Frame of observer position\n\nOutput\n\nstate: State of target with respect to observer\nlt: One way light time between target and observer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkcpt-NTuple{8,Any}",
    "page": "API",
    "title": "SPICE.spkcpt",
    "category": "method",
    "text": "spkcpt(trgpos, trgctr, trgref, et, outref, refloc, abcorr, obsrvr)\n\nReturn the state, relative to a specified observer, of a target having constant position in a specified reference frame. The target\'s position is provided by the calling program rather than by loaded SPK files.\n\nArguments\n\ntrgpos: Target position relative to center of motion\ntrgctr: Center of motion of target\ntrgref: Frame of target position\net: Observation epoch\noutref: Reference frame of output state\nrefloc: Output reference frame evaluation locus\nabcorr: Aberration correction\nobsrvr: Name of observing ephemeris object\n\nOutput\n\nstate: State of target with respect to observer\nlt: One way light time between target and observer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkcvo-NTuple{9,Any}",
    "page": "API",
    "title": "SPICE.spkcvo",
    "category": "method",
    "text": "spkcvo(target, et, outref, refloc, abcorr, obssta, obsepc, obsctr, obsref)\n\nReturn the state of a specified target relative to an \"observer,\" where the observer has constant velocity in a specified reference frame.  The observer\'s state is provided by the calling program rather than by loaded SPK files.\n\nArguments\n\ntarget: Name of target ephemeris object\net: Observation epoch\noutref: Reference frame of output state\nrefloc: Output reference frame evaluation locus\nabcorr: Aberration correction\nobssta: Observer state relative to center of motion\nobsepc: Epoch of observer state\nobsctr: Center of motion of observer\nobsref: Frame of observer state\n\nOutput\n\nstate: State of target with respect to observer\nlt: One way light time between target and observer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkcvt-NTuple{9,Any}",
    "page": "API",
    "title": "SPICE.spkcvt",
    "category": "method",
    "text": "spkcvt(trgsta, trgepc, trgctr, trgref, et, outref, refloc, abcorr, obsrvr)\n\nReturn the state, relative to a specified observer, of a target having constant velocity in a specified reference frame. The target\'s state is provided by the calling program rather than by loaded SPK files.\n\nArguments\n\ntrgsta: Target state relative to center of motion\ntrgepc: Epoch of target state\ntrgctr: Center of motion of target\ntrgref: Frame of target state\net: Observation epoch\noutref: Reference frame of output state\nrefloc: Output reference frame evaluation locus\nabcorr: Aberration correction\nobsrvr: Name of observing ephemeris object\n\nOutput\n\nstate: State of target with respect to observer\nlt: One way light time between target and observer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkez-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.spkez",
    "category": "method",
    "text": "spkez(targ, et, ref, abcorr, obs)\n\nReturn the state (position and velocity) of a target body relative to an observing body, optionally corrected for light time (planetary aberration) and stellar aberration.\n\nArguments\n\ntarg: Target body\net: Observer epoch\nref: Reference frame of output state vector\nabcorr: Aberration correction flag\nobs: Observing body\n\nOutput\n\nstarg: State of target\nlt: One way light time between observer and target\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkezp-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.spkezp",
    "category": "method",
    "text": "spkezp(targ, et, ref, abcorr, obs)\n\nReturn the position of a target body relative to an observing body, optionally corrected for light time (planetary aberration) and stellar aberration.\n\nArguments\n\ntarg: Target body\net: Observer epoch\nref: Reference frame of output state vector\nabcorr: Aberration correction flag\nobs: Observing body\n\nOutput\n\nptarg: Position of target\nlt: One way light time between observer and target\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkezr-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.spkezr",
    "category": "method",
    "text": "spkezr(targ, et, ref, abcorr, obs)\n\nReturn the state (position and velocity) of a target body relative to an observing body, optionally corrected for light time (planetary aberration) and stellar aberration.\n\nArguments\n\ntarg: Target body name\net: Observer epoch\nref: Reference frame of output state vector\nabcorr: Aberration correction flag\nobs: Observing body name\n\nOutput\n\nstarg: State of target\nlt: One way light time between observer and target\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkgeo-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.spkgeo",
    "category": "method",
    "text": "spkgeo(targ, et, ref, obs)\n\nCompute the geometric state (position and velocity) of a target body relative to an observing body.\n\nArguments\n\ntarg: Target body.\net: Target epoch.\nref: Target reference frame.\nobs: Observing body.\n\nOutput\n\nstate: State of target.\nlt: Light time.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkgps-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.spkgps",
    "category": "method",
    "text": "spkgps(targ, et, ref, obs)\n\nCompute the geometric position of a target body relative to an observing body.\n\nArguments\n\ntarg: Target body\net: Target epoch\nref: Target reference frame\nobs: Observing body\n\nOutput\n\npos: Position of target\nlt: Light time\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spklef-Tuple{Any}",
    "page": "API",
    "title": "SPICE.spklef",
    "category": "method",
    "text": "spklef(fname)\n\nLoad an ephemeris file for use by the readers. Return that file\'s handle, to be used by other SPK routines to refer to the file.\n\nArguments\n\nfname: Name of the file to be loaded\n\nOutput\n\nhandle: Loaded file\'s handle\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkltc-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.spkltc",
    "category": "method",
    "text": "spkltc(targ, et, ref, abcorr, stobs)\n\nReturn the state (position and velocity) of a target body relative to an observer, optionally corrected for light time, expressed relative to an inertial reference frame.\n\nArguments\n\ntarg: Target body\net: Observer epoch\nref: Inertial reference frame of output state\nabcorr: Aberration correction flag\nstobs: State of the observer relative to the SSB\n\nOutput\n\nstarg: State of target\nlt: One way light time between observer and target\ndlt: Derivative of light time with respect to time\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkobj!",
    "page": "API",
    "title": "SPICE.spkobj!",
    "category": "function",
    "text": "spkobj!(ids, spk)\nspkobj(spk)\n\nFind the set of ID codes of all objects in a specified SPK file.\n\nArguments\n\nids: A preallocated set of ID codes of objects in SPK file\nspk: Name of the SPK file\n\nOutput\n\nReturns the set of id codes.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkopa-Tuple{Any}",
    "page": "API",
    "title": "SPICE.spkopa",
    "category": "method",
    "text": "spkopa(file)\n\nOpen an existing SPK file for subsequent write.\n\nArguments\n\nfile: The name of an existing SPK file\n\nOutput\n\nReturns a handle attached to the SPK file opened to append.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkopn",
    "page": "API",
    "title": "SPICE.spkopn",
    "category": "function",
    "text": "spkopn(name, ifname=\"\", ncomch=0)\n\nCreate a new SPK file, returning the handle of the opened file.\n\nArguments\n\nname: The name of the new SPK file to be created\nifname: The internal filename for the SPK file (default: \"\")\nncomch: The number of characters to reserve for comments (default: 0)\n\nOutput\n\nReturns the handle of the opened SPK file.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkpds-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.spkpds",
    "category": "method",
    "text": "spkpds(body, center, frame, typ, first, last)\n\nPerform routine error checks and if all checks pass, pack the descriptor for an SPK segment.\n\nArguments\n\nbody: The NAIF ID code for the body of the segment\ncenter: The center of motion for body\nframe: The frame for this segment\ntype: The type of SPK segment to create\nfirst: The first epoch for which the segment is valid\nlast: The last  epoch for which the segment is valid\n\nOutput\n\nReturns an SPK segment descriptor.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkpos-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.spkpos",
    "category": "method",
    "text": "spkpos(targ, et, ref, abcorr, obs)\n\nReturn the position of a target body relative to an observing body, optionally corrected for light time (planetary aberration) and stellar aberration.\n\nArguments\n\ntarg: Target body name\net: Observer epoch\nref: Reference frame of output position vector\nabcorr: Aberration correction flag\nobs: Observing body name\n\nOutput\n\nptarg: Position of target\nlt: One way light time between observer and target\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkpvn-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.spkpvn",
    "category": "method",
    "text": "spkpvn(handle, descr, et)\n\nFor a specified SPK segment and time, return the state (position and velocity) of the segment\'s target body relative to its center of motion.\n\nArguments\n\nhandle: File handle\ndescr: Segment descriptor\net: Evaluation epoch\n\nOutput\n\nref: Segment reference frame ID code\nstate: Output state vector\ncenter: Center of state\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spksfs-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.spksfs",
    "category": "method",
    "text": "spksfs(body, et)\n\nSearch through loaded SPK files to find the highest-priority segment applicable to the body and time specified.\n\nArguments\n\nbody: Body ID\net: Ephemeris time\n\nOutput\n\nReturns nothing if no segment was found or a tuple consisting of:\n\nhandle: Handle of file containing the applicable segment\ndescr: Descriptor of the applicable segment\nident: Identifier of the applicable segment\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkssb-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.spkssb",
    "category": "method",
    "text": "spkssb(targ, et, ref)\n\nReturn the state (position and velocity) of a target body relative to the solar system barycenter.\n\nArguments\n\ntarg: Target body\net: Target epoch\nref: Target reference frame\n\nOutput\n\nReturns the state of target.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spksub!-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.spksub!",
    "category": "method",
    "text": "spksub!(newh, handle, descr, ident, start, stop)\n\nExtract a subset of the data in an SPK segment into a separate segment.\n\nArguments\n\nnewh: Handle of new segment\nhandle: Handle of source segment\ndescr: Descriptor of source segment\nident: Identifier of source segment\nstart: Beginning (initial epoch) of subset\nstop: End (final epoch) of subset\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkuds-Tuple{Any}",
    "page": "API",
    "title": "SPICE.spkuds",
    "category": "method",
    "text": "spkuds(descr)\n\nUnpack the contents of an SPK segment descriptor.\n\nArguments\n\ndescr: An SPK segment descriptor\n\nOutput\n\nbody: The NAIF ID code for the body of the segment\ncenter: The center of motion for body\nframe: The ID code for the frame of this segment\ntype: The type of SPK segment\nfirst: The first epoch for which the segment is valid\nlast: The last  epoch for which the segment is valid\nstart: Beginning DAF address of the segment\nstop: Ending DAF address of the segment\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkuef-Tuple{Any}",
    "page": "API",
    "title": "SPICE.spkuef",
    "category": "method",
    "text": "spkuef(handle)\n\nUnload an ephemeris file so that it will no longer be searched by the readers.\n\nArguments\n\nhandle: Handle of file to be unloaded\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw02-NTuple{10,Any}",
    "page": "API",
    "title": "SPICE.spkw02",
    "category": "method",
    "text": "spkw02(handle, body, center, frame, first, last, segid, intlen, cdata, btime)\n\nWrite a type 2 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\nintlen: Length of time covered by logical record\ncdata: Array of Chebyshev coefficients\nbtime: Begin time of first logical record\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw03-NTuple{10,Any}",
    "page": "API",
    "title": "SPICE.spkw03",
    "category": "method",
    "text": "spkw03(handle, body, center, frame, first, last, segid, intlen, cdata, btime)\n\nWrite a type 3 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\nintlen: Length of time covered by logical record\ncdata: Array of Chebyshev coefficients\nbtime: Begin time of first logical record\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw05-NTuple{10,Any}",
    "page": "API",
    "title": "SPICE.spkw05",
    "category": "method",
    "text": "spkw05(handle, body, center, frame, first, last, segid, gm, states, epochs)\n\nWrite an SPK segment of type 5 given a time-ordered set of discrete states and epochs, and the gravitational parameter of a central body.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\ngm: Gravitational parameter of central body\nstates: States\nepochs: Epochs\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw08-NTuple{11,Any}",
    "page": "API",
    "title": "SPICE.spkw08",
    "category": "method",
    "text": "spkw08(handle, body, center, frame, first, last, segid, degree, states, epoch1, step)\n\nWrite a type 8 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\ndegree: Degree of interpolating polynomials\nstates: States\nepoch1: Epoch of first state in states array\nstep: Time step separating epochs of states\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw09-NTuple{10,Any}",
    "page": "API",
    "title": "SPICE.spkw09",
    "category": "method",
    "text": "spkw09(handle, body, center, frame, first, last, segid, degree, states, epochs)\n\nWrite a type 9 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\ndegree: Degree of interpolating polynomials\nstates: States\nepochs: Epochs\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw10-NTuple{10,Any}",
    "page": "API",
    "title": "SPICE.spkw10",
    "category": "method",
    "text": "spkw10(handle, body, center, frame, first, last, segid, consts, elems, epochs)\n\nWrite a type 10 segment to an SPK file.\n\nArguments\n\nhandle: The handle of a DAF file open for writing\nbody: The NAIF ID code for the body of the segment\ncenter: The center of motion for body\nframe: The reference frame for this segment\nfirst: The first epoch for which the segment is valid\nlast: The last  epoch for which the segment is valid\nsegid: The string to use for segment identifier\nconsts: The array of geophysical constants for the segmen\nelems: The collection of \"two-line\" element sets\nepochs: The epochs associated with the element sets\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw12-NTuple{11,Any}",
    "page": "API",
    "title": "SPICE.spkw12",
    "category": "method",
    "text": "spkw12(handle, body, center, frame, first, last, segid, degree, states, epoch1, step)\n\nWrite a type 12 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\ndegree: Degree of interpolating polynomials\nstates: States\nepoch1: Epoch of first state in states array\nstep: Time step separating epochs of states\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw13-NTuple{10,Any}",
    "page": "API",
    "title": "SPICE.spkw13",
    "category": "method",
    "text": "spkw13(handle, body, center, frame, first, last, segid, degree, states, epochs)\n\nWrite a type 13 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\ndegree: Degree of interpolating polynomials\nstates: States\nepochs: Epochs\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw15-NTuple{17,Any}",
    "page": "API",
    "title": "SPICE.spkw15",
    "category": "method",
    "text": "spkw15(handle, body, center, frame, first, last, segid,\n       epoch, tp, pa, p, ecc, j2flg, pv, gm, j2, radius)\n\nWrite a type 15 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\nepoch: Epoch of the periapse\ntp: Trajectory pole vector\npa: Periapsis vector\np: Semi-latus rectum\necc: Eccentricity\nj2flg: J2 processing flag\npv: Central body pole vector\ngm: Central body GM\nj2: Central body J2\nradius: Equatorial radius of central body\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw17-NTuple{11,Any}",
    "page": "API",
    "title": "SPICE.spkw17",
    "category": "method",
    "text": "spkw17(handle, body, center, frame, first, last, segid, epoch, eqel, rapol, decpol)\n\nWrite a type 17 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nbody: Body code for ephemeris object\ncenter: Body code for the center of motion of the body\nframe: The reference frame of the states\nfirst: First valid time for which states can be computed\nlast: Last valid time for which states can be computed\nsegid: Segment identifier\nepoch: Epoch of elements in seconds past J2000\neqel: Array of equinoctial elements\nrapol: Right Ascension of the pole of the reference plane\ndecpol: Declination of the pole of the reference plane\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw18-NTuple{11,Any}",
    "page": "API",
    "title": "SPICE.spkw18",
    "category": "method",
    "text": "spkw18(handle, subtyp, body, center, frame, first, last, segid, degree, packts, epochs)\n\nWrite a type 18 segment to an SPK file.\n\nArguments\n\nhandle: Handle of an SPK file open for writing\nsubtyp: SPK type 18 subtype code, either :S18TP0 or :S18TP1\nbody: NAIF code for an ephemeris object\ncenter: NAIF code for center of motion of body\nframe: Reference frame name\nfirst: Start time of interval covered by segment\nlast: End time of interval covered by segment\nsegid: Segment identifier\ndegree: Degree of interpolating polynomials\npackts: Time-ordered array of data packets representing geometric states of body\nFor :S18TP0: [x,  y,  z,  dx/dt,  dy/dt,  dz/dt, vx, vy, vz, dvx/dt, dvy/dt, dvz/dt]\nFor :S18TP1: [x,  y,  z,  dx/dt,  dy/dt,  dz/dt]\nepochs: Array of epochs corresponding to states.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.spkw20-NTuple{13,Any}",
    "page": "API",
    "title": "SPICE.spkw20",
    "category": "method",
    "text": "spkw20(handle, body, center, frame, first, last, segid, intlen, n, polydg, cdata, dscale,\n       tscale, initjd, initfr)\n\nWrite a type 20 segment to an SPK file.\n\nArguments\n\nhandle: Handle of SPK file open for writing\nbody: NAIF code for ephemeris object\ncenter: NAIF code for the center of motion of the body\nframe: Reference frame name\nfirst: Start time of interval covered by segment\nlast: End time of interval covered by segment\nsegid: Segment identifier\nintlen: Length of time covered by logical record (days)\ncdata: Array of Chebyshev coefficients and positions\ndscale: Distance scale of data\ntscale: Time scale of data\ninitjd: Integer part of begin time (TDB Julian date) of first record\ninitfr: Fractional part of begin time (TDB Julian date) of first record\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.srfc2s-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.srfc2s",
    "category": "method",
    "text": "srfc2s(code, bodyid)\n\nTranslate a surface ID code, together with a body ID code, to the corresponding surface name. If no such name exists, return a string representation of the surface ID code.\n\nArguments\n\ncode: Integer surface ID code to translate to a string\nbodyid: ID code of body associated with surface\n\nOutput\n\nsrfstr: String corresponding to surface ID code\nisname: Logical flag indicating output is a surface name\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.srfcss-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.srfcss",
    "category": "method",
    "text": "srfcss(code, bodstr)\n\nTranslate a surface ID code, together with a body string, to the corresponding surface name. If no such surface name exists, return a string representation of the surface ID code.\n\nArguments\n\ncode: Integer surface ID code to translate to a string\nbodstr: Name or ID of body associated with surface\n\nOutput\n\nsrfstr: String corresponding to surface ID code\nisname: Logical flag indicating output is a surface name\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.srfnrm-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.srfnrm",
    "category": "method",
    "text": "srfnrm(method, target, et, fixref, npts, srfpts)\n\nMap array of surface points on a specified target body to the corresponding unit length outward surface normal vectors.\n\nThe surface of the target body may be represented by a triaxial ellipsoid or by topographic data provided by DSK files.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\net: Epoch in TDB seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nsrfpts: Array of surface points\n\nOutput\n\nReturns an array of outward, unit length normal vectors.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.srfrec-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.srfrec",
    "category": "method",
    "text": "srfrec(body, longitude, latitude)\n\nConvert planetocentric latitude and longitude of a surface point on a specified body to rectangular coordinates.\n\nArguments\n\nbody: NAIF integer code of an extended body.\nlongitude: Longitude of point in radians.\nlatitude: Latitude of point in radians.\n\nOutput\n\nReturns the rectangular coordinates of the point.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.srfs2c-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.srfs2c",
    "category": "method",
    "text": "srfs2c(srfstr, bodstr)\n\nTranslate a surface string, together with a body string, to the corresponding surface ID code. The input strings may contain names or integer ID codes.\n\nArguments\n\nsrfstr: Surface name or ID string\nbodstr: Body name or ID string\n\nOutput\n\nReturns the surface ID code if it was found or nothing otherwise.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.srfscc-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.srfscc",
    "category": "method",
    "text": "srfscc(srfstr, bodyid)\n\nTranslate a surface string, together with a body ID code, to the corresponding surface ID code. The input surface string may contain a name or an integer ID code.\n\nArguments\n\nsrfstr: Surface name or ID string\nbodyid: Body ID code.\n\nOutput\n\nReturns the surface ID code if it was found or nothing otherwise.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.srfxpt",
    "page": "API",
    "title": "SPICE.srfxpt",
    "category": "function",
    "text": "srfxpt\n\n!!! warning Deprecated     Use sincpt instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ssize!-Union{Tuple{T}, Tuple{SpiceCell{T,T1,N} where N where T1,Any}} where T",
    "page": "API",
    "title": "SPICE.ssize!",
    "category": "method",
    "text": "ssize!(cell, size)\n\nSet the size (maximum cardinality) of a cell of any data type.\n\nArguments\n\ncell: The cell\nsize: Size (maximum cardinality) of the cell\n\nOutput\n\nReturns the updated cell.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.stelab-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.stelab",
    "category": "method",
    "text": "stelab(pobj, vobs)\n\nCorrect the apparent position of an object for stellar aberration.\n\nArguments\n\npobj: Position of an object with respect to the observer\nvobs: Velocity of the observer with respect to the Solar System barycenter\n\nOutput\n\nReturns the apparent position of the object with respect to the observer, corrected for stellar aberration.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.stpool",
    "page": "API",
    "title": "SPICE.stpool",
    "category": "function",
    "text": "stpool(item, nth, contin, lenout=1024)\n\nRetrieve the nth string from the kernel pool variable, where the string may be continued across several components of the kernel pool variable.\n\nArguments\n\nitem: Name of the kernel pool variable\nnth: Index of the full string to retrieve\ncontin: Character sequence used to indicate continuation\nlenout: Available space in output string (default: 1024)\n\nOutput\n\nReturns the full string concatenated across continuations if the kernel variable was found or nothing otherwise.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.str2et-Tuple{Any}",
    "page": "API",
    "title": "SPICE.str2et",
    "category": "method",
    "text": "str2et(str)\n\nConvert a string representing an epoch to a double precision value representing the number of TDB seconds past the J2000 epoch corresponding to the input epoch.\n\nArguments\n\nstr: A string representing an epoch\n\nOutput\n\nReturns the equivalent value in seconds past J2000, TDB.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.subpnt-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.subpnt",
    "category": "method",
    "text": "subpnt(method, target, et, fixref, obsrvr, abcorr)\n\nCompute the rectangular coordinates of the sub-observer point on a target body at a specified epoch, optionally corrected for light time and stellar aberration.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\net: Epoch in ephemeris seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nabcorr: Aberration correction\nobsrvr: Name of observing body\n\nOutput\n\nspoint: Sub-solar point on the target body\ntrgepc: Sub-solar point epoch\nsrfvec: Vector from observer to sub-solar point\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.subpt",
    "page": "API",
    "title": "SPICE.subpt",
    "category": "function",
    "text": "subpt\n\n!!! warning Deprecated     Use subpnt instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.subpt_pl02",
    "page": "API",
    "title": "SPICE.subpt_pl02",
    "category": "function",
    "text": "subpt_pl02\n\n!!! warning Deprecated     Use subpnt instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.subslr-NTuple{6,Any}",
    "page": "API",
    "title": "SPICE.subslr",
    "category": "method",
    "text": "subslr(method, target, et, fixref, abcorr, obsrvr)\n\nCompute the rectangular coordinates of the sub-solar point on a target body at a specified epoch, optionally corrected for light time and stellar aberration.\n\nArguments\n\nmethod: Computation method\ntarget: Name of target body\net: Epoch in ephemeris seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nabcorr: Aberration correction\nobsrvr: Name of observing body\n\nOutput\n\nspoint: Sub-solar point on the target body\ntrgepc: Sub-solar point epoch\nsrfvec: Vector from observer to sub-solar point\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.subsol",
    "page": "API",
    "title": "SPICE.subsol",
    "category": "function",
    "text": "subsol\n\n!!! warning Deprecated     Use subslr instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.subsol_pl02",
    "page": "API",
    "title": "SPICE.subsol_pl02",
    "category": "function",
    "text": "subsol_pl02\n\n!!! warning Deprecated     Use subslr instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sumad",
    "page": "API",
    "title": "SPICE.sumad",
    "category": "function",
    "text": "sumad(array)\n\n!!! warning Deprecated     Use sum(array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sumai",
    "page": "API",
    "title": "SPICE.sumai",
    "category": "function",
    "text": "sumai(array)\n\n!!! warning Deprecated     Use sum(array) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.surfnm-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.surfnm",
    "category": "method",
    "text": "surfnm(a, b, c, point)\n\nComputes the outward-pointing, unit normal vector from a point on the surface of an ellipsoid.\n\nArguments\n\na: Length of the ellisoid semi-axis along the x-axis\nb: Length of the ellisoid semi-axis along the y-axis\nc: Length of the ellisoid semi-axis along the z-axis\npoint: Body-fixed coordinates of a point on the ellipsoid\n\nOutput\n\nReturn the outward pointing unit normal to ellipsoid at point\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.surfpt-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.surfpt",
    "category": "method",
    "text": "surfpt(positn, u, a, b, c)\n\nDetermine the intersection of a line-of-sight vector with the surface of an ellipsoid.\n\nArguments\n\npositn: Position of the observer in body-fixed frame\nu: Vector from the observer in some direction\na: Length of the ellipsoid semi-axis along the x-axis\nb: Length of the ellipsoid semi-axis along the y-axis\nc: Length of the ellipsoid semi-axis along the z-axis\n\nOutput\n\nReturns the point on the ellipsoid pointed to by u or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.surfpv-NTuple{5,Any}",
    "page": "API",
    "title": "SPICE.surfpv",
    "category": "method",
    "text": "surfpv(stvrtx, stdir, a, b, c)\n\nFind the state (position and velocity) of the surface intercept defined by a specified ray, ray velocity, and ellipsoid.\n\nArguments\n\nstvrtx: State of ray\'s vertex\nstdir: State of ray\'s direction vector\na: Length of ellipsoid semi-axis along the x-axis\nb: Length of ellipsoid semi-axis along the y-axis\nc: Length of ellipsoid semi-axis along the z-axis\n\nOutput\n\nReturn the state of surface intercept or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.swpool-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.swpool",
    "category": "method",
    "text": "swpool(agent, names)\n\nAdd a name to the list of agents to notify whenever a member of a list of kernel variables is updated.\n\nArguments\n\nagent: The name of an agent to be notified after updates\nnames: Variable names whose update causes the notice\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.sxform-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.sxform",
    "category": "method",
    "text": "sxform(from, to, et)\n\nReturn the state transformation matrix from one frame to another at a specified epoch.\n\nArguments\n\nfrom: Name of the frame to transform from\nto: Name of the frame to transform to\net: Epoch of the state transformation matrix\n\nOutput\n\nReturns the state transformation matrix.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.szpool-Tuple{Any}",
    "page": "API",
    "title": "SPICE.szpool",
    "category": "method",
    "text": "szpool(name)\n\nReturn the kernel pool size limitations.\n\nArguments\n\nname: Name of the parameter to be returned\n\nOutput\n\nReturns the value of the parameter specified by name or nothing if none was found.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.termpt-NTuple{14,Any}",
    "page": "API",
    "title": "SPICE.termpt",
    "category": "method",
    "text": "Find terminator points on a target body. The caller specifies half-planes, bounded by the illumination source center-target center vector, in which to search for terminator points.\n\nThe terminator can be either umbral or penumbral. The umbral terminator is the boundary of the region on the target surface where no light from the source is visible. The penumbral terminator is the boundary of the region on the target surface where none of the light from the source is blocked by the target itself.\n\nThe surface of the target body may be represented either by a triaxial ellipsoid or by topographic data.\n\nArguments\n\nmethod: Computation method\nilusrc: Illumination source\ntarget: Name of target body\net: Epoch in ephemeris seconds past J2000 TDB\nfixref: Body-fixed, body-centered target body frame\nabcorr: Aberration correction\ncorloc: Aberration correction locus\nobsrvr: Name of observing body\nrefvec: Reference vector for cutting half-planes\nrolstp: Roll angular step for cutting half-planes\nncuts: Number of cutting planes\nschstp: Angular step size for searching\nsoltol: Solution convergence tolerance\nmaxn: Maximum number of entries in output arrays\n\nOutput\n\nnpts: Counts of terminator points corresponding to cuts\npoints: Terminator points\nepochs: Times associated with terminator points\ntrmvcs: Terminator vectors emanating from the observer\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.timdef",
    "page": "API",
    "title": "SPICE.timdef",
    "category": "function",
    "text": "timdef(action, item, value=\"\")\n\nSet and retrieve the defaults associated with calendar input strings.\n\nArguments\n\naction: The kind of action to take, either :SET or :GET\nitem: The default item of interest. The items that may be requested are:\n:CALENDAR with allowed values:\n\"GREGORIAN\"\n\"JULIAN\"\n\"MIXED\"\n:SYSTEM with allowed values:\n\"TDB\"\n\"TDT\"\n\"UTC\"\n:ZONE with allowed values (0 <= HR < 13 and 0 <= MN < 60):\n\"EST\"\n\"EDT\"\n\"CST\"\n\"CDT\"\n\"MST\"\n\"MDT\"\n\"PST\"\n\"PDT\"\n\"UTC+$HR\"\n\"UTC-$HR\"\n\"UTC+$HR:$MN\"\n\"UTC-$HR:$MN\"\n\nOutput\n\nReturns the value associated with the default item.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.timout",
    "page": "API",
    "title": "SPICE.timout",
    "category": "function",
    "text": "timout(et, pictur, lenout=128)\n\nThis routine converts an input epoch represented in TDB seconds past the TDB epoch of J2000 to a character string formatted to the specifications of a user\'s format picture.\n\nArguments\n\net: An epoch in seconds past the ephemeris epoch J2000\npictur: A format specification for the output string\nlenout: The length of the output string plus 1 (default: 128)\n\nOutput\n\nReturns a string representation of the input epoch.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.tipbod-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.tipbod",
    "category": "method",
    "text": "tipbod(ref, body, et)\n\nReturn a 3x3 matrix that transforms positions in inertial coordinates to positions in body-equator-and-prime-meridian coordinates.\n\nArguments\n\nref: Name of inertial reference frame to transform from\nbody: ID code of body\net: Epoch of transformation\n\nOutput\n\nReturns transformation matrix from intertial position to prime meridian.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.tisbod-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.tisbod",
    "category": "method",
    "text": "tisbod(ref, body, et)\n\nReturn a 6x6 matrix that transforms states in inertial coordinates to states in body-equator-and-prime-meridian coordinates.\n\nArguments\n\nref: Name of inertial reference frame to transform from\nbody: ID code of body\net: Epoch of transformation\n\nOutput\n\nReturns transformation matrix from intertial state to prime meridian.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.tkvrsn",
    "page": "API",
    "title": "SPICE.tkvrsn",
    "category": "function",
    "text": "tkvrsn(item=:TOOLKIT)\n\nGiven an item such as the Toolkit or an entry point name, return the latest version string.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.tparse-Tuple{Any}",
    "page": "API",
    "title": "SPICE.tparse",
    "category": "method",
    "text": "tparse(string)\n\nParse a time string and return seconds past the J2000 epoch on a formal calendar.\n\nArguments\n\nstring: Input time string in UTC\n\nOutput\n\nReturns UTC expressed in seconds since J2000.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.tpictr",
    "page": "API",
    "title": "SPICE.tpictr",
    "category": "function",
    "text": "tpictr(sample, lenout=80)\n\nGiven a sample time string, create a time format picture suitable for use by the routine timout.\n\nArguments\n\nsample: A sample time string\nlenout: The length for the output picture string (default: 80)\n\nOutput\n\nReturns a format picture that describes sample.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.trace",
    "page": "API",
    "title": "SPICE.trace",
    "category": "function",
    "text": "trace(matrix)\n\nwarning: Deprecated\nUse LinearAlgebra.tr(matrix) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.tsetyr-Tuple{Any}",
    "page": "API",
    "title": "SPICE.tsetyr",
    "category": "method",
    "text": "tsetyr(year)\n\nSet the lower bound on the 100 year range.\n\nArguments\n\n-year: Lower bound on the 100 year interval of expansion\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.twopi",
    "page": "API",
    "title": "SPICE.twopi",
    "category": "function",
    "text": "twopi()\n\nwarning: Deprecated\nUse 2π instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.twovec-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.twovec",
    "category": "method",
    "text": "twovec(axdef, indexa, plndef, indexp)\n\nFind the transformation to the right-handed frame having a given vector as a specified axis and having a second given vector lying in a specified coordinate plane.\n\nArguments\n\naxdef: Vector defining a principal axis\nindexa: Principal axis number of axdef (X=1, Y=2, Z=3)\nplndef: Vector defining (with axdef) a principal plane\nindexp: Second axis number (with indexa) of principal plane\n\nOutput\n\nReturns output rotation matrix.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.tyear-Tuple{}",
    "page": "API",
    "title": "SPICE.tyear",
    "category": "method",
    "text": "tyear()\n\nReturns the number of seconds per tropical year.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ucase",
    "page": "API",
    "title": "SPICE.ucase",
    "category": "function",
    "text": "ucase(in)\n\nwarning: Deprecated\nUse uppercase(in) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.ucrss",
    "page": "API",
    "title": "SPICE.ucrss",
    "category": "function",
    "text": "ucrss(v1, v2)\n\nwarning: Deprecated\nUse LinearAlgebra.normalize(LinearAlgebra.cross(v1, v2)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.uddf-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.uddf",
    "category": "method",
    "text": "uddf(udfunc, x, dx)\n\nRoutine to calculate the first derivative of a caller-specified function using a three-point estimation.\n\nArguments\n\nudfunc: A callable that computes the scalar value of interest,   e.g. f(x::Float64) -> Float64.\nx: Independent variable of \'udfunc\'\ndx: Interval from x for derivative calculation\n\nOutput\n\nReturns the approximate derivative of udfunc at x.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.unitim-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.unitim",
    "category": "method",
    "text": "unitim(epoch, insys, outsys)\n\nTransform time from one uniform scale to another.\n\nArguments\n\nepoch: An epoch to be converted\ninsys: The time scale associated with the input epoch\noutsys: The time scale associated with the function value\n\nThe uniform time scales are:\n\n:TAI\n:TDT\n:TDB\n:ET\n:JED\n:JDTDB\n:JDTDT\n\nOutput\n\nReturns the time in the system specified by outsys that is equivalent to the epoch in the insys time scale.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.unload-Tuple{Any}",
    "page": "API",
    "title": "SPICE.unload",
    "category": "method",
    "text": "unload(file)\n\nUnload a SPICE kernel.\n\nArguments\n\nfile: The file name of a kernel to unload\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.unorm",
    "page": "API",
    "title": "SPICE.unorm",
    "category": "function",
    "text": "unorm(v1)\n\nwarning: Deprecated\nUse (LinearAlgebra.normalize(v1), LinearAlgebra.norm(v1)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.unormg",
    "page": "API",
    "title": "SPICE.unormg",
    "category": "function",
    "text": "unormg(v1)\n\nwarning: Deprecated\nUse (LinearAlgebra.normalize(v1), LinearAlgebra.norm(v1)) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.utc2et-Tuple{Any}",
    "page": "API",
    "title": "SPICE.utc2et",
    "category": "method",
    "text": "utc2et(utcstr)\n\nConvert an input time from Calendar or Julian Date format, UTC, to ephemeris seconds past J2000.\n\nArguments\n\nutcstr: Input time string, UTC\n\nOutput\n\nReturns the equivalent of utcstr, expressed in ephemeris seconds past J2000.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vadd",
    "page": "API",
    "title": "SPICE.vadd",
    "category": "function",
    "text": "vadd(v1, v2)\n\nwarning: Deprecated\nUse v1 .+ v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vaddg",
    "page": "API",
    "title": "SPICE.vaddg",
    "category": "function",
    "text": "vaddg(v1, v2)\n\nwarning: Deprecated\nUse v1 .+ v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.valid!-Union{Tuple{SpiceCell{T,T1,N} where N where T1}, Tuple{T}} where T",
    "page": "API",
    "title": "SPICE.valid!",
    "category": "method",
    "text": "valid!(set::SpiceCell{T}) where T\n\nCreate a valid SPICE set from a SPICE Cell of any data type.\n\nArguments\n\nset: Set to be validated\n\nOutput\n\nReturns the validated set with ordered elements and duplicates removed.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vcrss",
    "page": "API",
    "title": "SPICE.vcrss",
    "category": "function",
    "text": "vcrss(v1, v2)\n\nwarning: Deprecated\nUse LinearAlgebra.cross(v1, v2) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vdist",
    "page": "API",
    "title": "SPICE.vdist",
    "category": "function",
    "text": "vdist(v1, v2)\n\nwarning: Deprecated\nUse LinearAlgebra.norm(v1 .- v2) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vdistg",
    "page": "API",
    "title": "SPICE.vdistg",
    "category": "function",
    "text": "vdistg(v1, v2)\n\nwarning: Deprecated\nUse LinearAlgebra.norm(v1 .- v2) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vdot",
    "page": "API",
    "title": "SPICE.vdot",
    "category": "function",
    "text": "vdot(v1, v2)\n\nwarning: Deprecated\nUse LinearAlgebra.dot(v1, v2) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vdotg",
    "page": "API",
    "title": "SPICE.vdotg",
    "category": "function",
    "text": "vdotg(v1, v2)\n\nwarning: Deprecated\nUse LinearAlgebra.dot(v1, v2) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vequ",
    "page": "API",
    "title": "SPICE.vequ",
    "category": "function",
    "text": "vequ(v1, v2)\n\nwarning: Deprecated\nUse v1 .= v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vequg",
    "page": "API",
    "title": "SPICE.vequg",
    "category": "function",
    "text": "vequg(v1, v2)\n\nwarning: Deprecated\nUse v1 .= v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vhat",
    "page": "API",
    "title": "SPICE.vhat",
    "category": "function",
    "text": "vhat(v1)\n\nwarning: Deprecated\nUse LinearAlgebra.normalize(v1) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vhatg",
    "page": "API",
    "title": "SPICE.vhatg",
    "category": "function",
    "text": "vhatg(v1)\n\nwarning: Deprecated\nUse LinearAlgebra.normalize(v1) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vlcom",
    "page": "API",
    "title": "SPICE.vlcom",
    "category": "function",
    "text": "vlcom(a, v1, b, v2)\n\nwarning: Deprecated\nUse a .* v1 .+ b .* v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vlcom3",
    "page": "API",
    "title": "SPICE.vlcom3",
    "category": "function",
    "text": "vlcom3(a, v1, b, v2, c, v3)\n\nwarning: Deprecated\nUse a .* v1 .+ b .* v2 .+ c .* v3 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vlcomg",
    "page": "API",
    "title": "SPICE.vlcomg",
    "category": "function",
    "text": "vlcomg(a, v1, b, v2)\n\nwarning: Deprecated\nUse a .* v1 .+ b .* v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vminug",
    "page": "API",
    "title": "SPICE.vminug",
    "category": "function",
    "text": "vminug(vin)\n\nwarning: Deprecated\nUse -vin instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vminus",
    "page": "API",
    "title": "SPICE.vminus",
    "category": "function",
    "text": "vminus(vin)\n\nwarning: Deprecated\nUse -vin instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vnorm",
    "page": "API",
    "title": "SPICE.vnorm",
    "category": "function",
    "text": "vnorm(v1)\n\nwarning: Deprecated\nUse LinearAlgebra.norm(v1) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vnormg",
    "page": "API",
    "title": "SPICE.vnormg",
    "category": "function",
    "text": "vnormg(v1, v2)\n\nwarning: Deprecated\nUse LinearAlgebra.norm(v1) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vpack",
    "page": "API",
    "title": "SPICE.vpack",
    "category": "function",
    "text": "vpack(x, y, z)\n\nwarning: Deprecated\nUse [x, y, z] instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vperp-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.vperp",
    "category": "method",
    "text": "vperp(a, b)\n\nFind the component of a vector that is perpendicular to a second vector.\n\nArguments\n\na: The vector whose orthogonal component is sought\nb: The vector used as the orthogonal reference\n\nOutput\n\nReturns the component a orthogonal to b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vprjp-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.vprjp",
    "category": "method",
    "text": "vprjp(vin, plane)\n\nProject a vector onto a specified plane, orthogonally.\n\nArguments\n\nvin: Vector to be projected\nplane: Plane onto which vin is projected\n\nOutput\n\nReturns the vector resulting from the projection.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vprjpi-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.vprjpi",
    "category": "method",
    "text": "vprjpi(vin, projpl, invpl)\n\nFind the vector in a specified plane that maps to a specified vector in another plane under orthogonal projection.\n\nArguments\n\nvin: The projected vector\nprojpl: Plane containing vin\ninvpl: Plane containing inverse image of vin\n\nOutput\n\nReturns the inverse projection of vin or nothing if vin could not be calculated.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vproj-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.vproj",
    "category": "method",
    "text": "vproj(a, b)\n\nFinds the projection of one vector onto another vector. All vectors are 3-dimensional.\n\nArguments\n\na: The vector to be projected\nb: The vector onto which a is to be projected\n\nOutput\n\nReturns the projection of a onto b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vrel-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.vrel",
    "category": "method",
    "text": "vrel(v1, v2)\n\nReturn the relative difference between two 3-dimensional vectors.\n\nArguments\n\nv1, v2: Two three-dimensional input vectors\n\nOutput\n\nReturns the relative differences between v1 and v2.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vrelg-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.vrelg",
    "category": "method",
    "text": "vrelg(v1, v2)\n\nReturn the relative difference between two vectors.\n\nArguments\n\nv1, v2: Input vectors\n\nOutput\n\nReturns the relative differences between v1 and v2.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vrotv-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.vrotv",
    "category": "method",
    "text": "vrotv(v, axis, theta)\n\nRotate a vector about a specified axis vector by a specified angle and return the rotated vector.\n\nArguments\n\nv: Vector to be rotated\naxis: Axis of the rotation\ntheta: Angle of rotation (radians)\n\nOutput\n\nResult of rotating v about axis by theta.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vscl",
    "page": "API",
    "title": "SPICE.vscl",
    "category": "function",
    "text": "vscl(s, v1)\n\nwarning: Deprecated\nUse s .* v1 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vsclg",
    "page": "API",
    "title": "SPICE.vsclg",
    "category": "function",
    "text": "vsclg(s, v1)\n\nwarning: Deprecated\nUse s .* v1 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vsep-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.vsep",
    "category": "method",
    "text": "vsep(v1, v2)\n\nReturn the sepative difference between two 3-dimensional vectors.\n\nArguments\n\nv1, v2: Two three-dimensional input vectors\n\nOutput\n\nReturns the angle between v1 and v2 in radians.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vsepg-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.vsepg",
    "category": "method",
    "text": "vsepg(v1, v2)\n\nReturn the sepative difference between two vectors.\n\nArguments\n\nv1, v2: Input vectors\n\nOutput\n\nReturns the angle between v1 and v2 in radians.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vsub",
    "page": "API",
    "title": "SPICE.vsub",
    "category": "function",
    "text": "vsub(v1, v2)\n\nwarning: Deprecated\nUse v1 .- v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vsubg",
    "page": "API",
    "title": "SPICE.vsubg",
    "category": "function",
    "text": "vsubg(v1, v2)\n\nwarning: Deprecated\nUse v1 .- v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vtmv",
    "page": "API",
    "title": "SPICE.vtmv",
    "category": "function",
    "text": "vtmv(v1, matrix, v2)\n\nwarning: Deprecated\nUse v1\' * matrix * v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vtmvg",
    "page": "API",
    "title": "SPICE.vtmvg",
    "category": "function",
    "text": "vtmvg(v1, matrix, v2)\n\nwarning: Deprecated\nUse v1\' * matrix * v2 instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vupack",
    "page": "API",
    "title": "SPICE.vupack",
    "category": "function",
    "text": "vupack(v)\n\nwarning: Deprecated\nUse x, y, z = v instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vzero",
    "page": "API",
    "title": "SPICE.vzero",
    "category": "function",
    "text": "vzero(v1)\n\nwarning: Deprecated\nUse iszero(v1) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.vzerog",
    "page": "API",
    "title": "SPICE.vzerog",
    "category": "function",
    "text": "vzerog(v1, v2)\n\nwarning: Deprecated\nUse iszero(v1) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wncard-Tuple{Any}",
    "page": "API",
    "title": "SPICE.wncard",
    "category": "method",
    "text": "wncard(window)\n\nReturn the cardinality (number of intervals) of a double precision window.\n\nArguments\n\nwindow: Input window\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wncomd-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.wncomd",
    "category": "method",
    "text": "wncomd(window, left, right)\n\nDetermine the complement of a double precision window with respect to a specified interval.\n\nArguments\n\nwindow: Input window\nleft:  Left endpoint of the complement interval\nright:  Right endpoint of the complement interval\n\nOutput\n\nReturns the complement of window with respect to [left,right].\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wncond!-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.wncond!",
    "category": "method",
    "text": "wncond!(window, left, right)\n\nContract each of the intervals of a double precision window.\n\nArguments\n\nwindow: Window to be contracted\nleft:  Amount added to each left endpoint\nright: Amount subtracted from each right endpoint\n\nOutput\n\nReturns the contracted window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wndifd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wndifd",
    "category": "method",
    "text": "wndifd(a, b)\n\nPlace the difference of two double precision windows into a third window.\n\nArguments\n\na: Input window\nb: Input window\n\nOutput\n\nReturns a window containing the difference of a and b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnelmd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wnelmd",
    "category": "method",
    "text": "wnelmd(window, point)\n\nDetermine whether a point is an element of a double precision window.\n\nArguments\n\nwindow: Input window\npoint: Input point\n\nOutput\n\nReturns true if point is an element of window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnexpd!-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.wnexpd!",
    "category": "method",
    "text": "wnexpd(window, left, right)\n\nExpand each of the intervals of a double precision window.\n\nArguments\n\nleft: Amount subtracted from each left endpoint\nright: Amount added to each right endpoint\n\nOutput\n\nReturns the expanded window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnextd!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wnextd!",
    "category": "method",
    "text": "wnextd!(window, side)\n\nExtract the left or right endpoints from a double precision window.\n\nArguments\n\nwindow: Window to be extracted\nside: Extract left (:L) or right (:R) endpoints\n\nOutput\n\nReturns the extracted window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnfetd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wnfetd",
    "category": "method",
    "text": "wnfetd(window, n)\n\nFetch a particular interval from a double precision window.\n\nArguments\n\nwindow: Input window\nn: Index of interval to be fetched\n\nOutput\n\nReturns a tuple consisting of the left and right endpoints of the n-th interval in the input window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnfild!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wnfild!",
    "category": "method",
    "text": "wnfild!(window, small)\n\nFill small gaps between adjacent intervals of a double precision window.\n\nArguments\n\nwindow: Window to be filled\nsmall: Limiting measure of small gaps\n\nOutput\n\nReturns the updated window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnfltd!-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wnfltd!",
    "category": "method",
    "text": "wnfild!(window, small)\n\nFilter (remove) small intervals from a double precision window.\n\nArguments\n\nwindow: Window to be filtered\nsmall: Limiting measure of small intervals\n\nOutput\n\nReturns the updated window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnincd-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.wnincd",
    "category": "method",
    "text": "wnincd(window, left, right)\n\nDetermine whether an interval is included in a double precision window.\n\nArguments\n\nwindow: Input window\nleft: Left endpoint of the input interval\nright: Right endpoint of the input interval\n\nOutput\n\nReturns true when (left, right) is contained in window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wninsd!-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.wninsd!",
    "category": "method",
    "text": "wninsd!(window, left, right)\n\nInsert an interval into a double precision window.\n\nArguments\n\nwindow: Input window\nleft: Left endpoint of the new interval\nright: Right endpoint of the new interval\n\nOutput\n\nReturns the updated windows.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnintd-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wnintd",
    "category": "method",
    "text": "wnintd(a, b)\n\nPlace the intersection of two double precision windows into a third window.\n\nArguments\n\na: Input window\nb: Input window\n\nOutput\n\nReturns a window containing the intersection of a and b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnreld-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "SPICE.wnreld",
    "category": "method",
    "text": "wnreld(a, op, b)\n\nCompare two double precision windows.\n\nnote: Note\nConsider using overloaded operators instead, i.e. a == b, a ⊆ b, and a ⊊ b.\n\nArguments\n\na: First window\nop: Comparison operator\nb: Second window\n\nOutput\n\nReturns the result of comparison a (op) b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnsumd-Tuple{Any}",
    "page": "API",
    "title": "SPICE.wnsumd",
    "category": "method",
    "text": "wnsumd(window)\n\nSummarize the contents of a double precision window.\n\nArguments\n\nwindow: Window to be summarized\n\nOutput\n\nReturns a tuple consisting of:\n\nmeas: Total measure of intervals in window\navg: Average measure\nstddev: Standard deviation\nshortest: Location of shortest interval\nlongest: Location of longest interval\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnunid-Tuple{Any,Any}",
    "page": "API",
    "title": "SPICE.wnunid",
    "category": "method",
    "text": "wnunid(a, b)\n\nPlace the union of two double precision windows into a third window.\n\nArguments\n\na: Input window\nb: Input window\n\nOutput\n\nReturns a window containing the union of a and b.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.wnvald!-Tuple{Any}",
    "page": "API",
    "title": "SPICE.wnvald!",
    "category": "method",
    "text": "wnvald!(window)\n\nForm a valid double precision window from the contents of a window array.\n\nArguments\n\nwindow: A (possibly uninitialized) SpiceDoubleCell containing endpoints of   (possibly unordered and non-disjoint) intervals.\n\nOutput\n\nReturns the validated window.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.xf2eul-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.xf2eul",
    "category": "method",
    "text": "xf2eul(xform, axisa, axisb, axisc)\n\nConvert a state transformation matrix to Euler angles and their derivatives with respect to a specified set of axes.\n\nArguments\n\nxform: A state transformation matrix\naxisa: Axis A of the Euler angle factorization\naxisb: Axis B of the Euler angle factorization\naxisc: Axis C of the Euler angle factorization\n\nOutput\n\nReturns a tuple of an array of Euler angles and their derivatives and a boolean that indicates whether these are a unique representation.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.xf2rav-Tuple{Any}",
    "page": "API",
    "title": "SPICE.xf2rav",
    "category": "method",
    "text": "xf2rav(xform)\n\nDetermines the rotation matrix and angular velocity of the rotation from a state transformation matrix.\n\nArguments\n\nxform: State transformation matrix\n\nOutput\n\nReturns a tuple of the rotation matrix and the angular velocity vector associated with xform.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.xfmsta-NTuple{4,Any}",
    "page": "API",
    "title": "SPICE.xfmsta",
    "category": "method",
    "text": "xfmsta(input_state, input_coord_sys, output_coord_sys, body)\n\nTransform a state between coordinate systems.\n\nArguments\n\ninput_state: Input state\ninput_coord_sys: Current (input) coordinate system\n`outputcoordsys: Desired (output) coordinate system\nbody: Name or NAIF ID of body with which coordinates are associated (if applicable)\n\nOutput\n\nReturns the converted output state.\n\nReferences\n\nNAIF Documentation\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.xpose",
    "page": "API",
    "title": "SPICE.xpose",
    "category": "function",
    "text": "xpose(matrix)\n\nwarning: Deprecated\nUse transpose(matrix) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.xpose6",
    "page": "API",
    "title": "SPICE.xpose6",
    "category": "function",
    "text": "xpose6(matrix)\n\nwarning: Deprecated\nUse transpose(matrix) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#SPICE.xposeg",
    "page": "API",
    "title": "SPICE.xposeg",
    "category": "function",
    "text": "xposeg(matrix)\n\nwarning: Deprecated\nUse transpose(matrix) instead.\n\n\n\n\n\n"
},

{
    "location": "api/#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "DocTestSetup = quote\n    using SPICE\nendModules = [SPICE]\nPrivate = false"
},

]}