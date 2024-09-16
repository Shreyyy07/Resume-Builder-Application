import { Loader2Icon, MoreVertical } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import { Link, useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import GlobalApi from './../../../service/GlobalApi'
import { toast } from 'sonner'

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      (resp) => {
        console.log(resp);
        toast('Resume Deleted!');
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      // eslint-disable-next-line no-unused-vars
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <Link to={'/dashboard/resume/' + resume.documentId + '/edit'}>
        <div
          className="p-14 bg-gradient-to-b from-indigo-400 via-sky-400 to-emerald-300 flex items-center justify-center h-[280px] rounded-t-lg border-t-4 gap-5"
          style={{
            borderColor: resume?.ThemeColor,
          }}
        >
          <div className="flex items-center justify-center h-[180px]">
            <img src="/cv.png" width={80} height={80} alt="Resume" />
          </div>
        </div>
      </Link>
      <div
        className="border p-3 flex justify-between text-black rounded-b-lg shadow-lg"
        style={{
          background: resume?.ThemeColor,
        }}
      >
        <h2 className="text-sm">{resume.title}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigation('/dashboard/resume/' + resume.documentId + '/edit')}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation('/my-resume/' + resume.documentId + '/view')}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation('/my-resume/' + resume.documentId + '/view')}>Download</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

// Define PropTypes for validation
ResumeCardItem.propTypes = {
  resume: PropTypes.shape({
    documentId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ThemeColor: PropTypes.string, // Optional
  }).isRequired,
  refreshData: PropTypes.func.isRequired, // Ensure refreshData is a function
};

export default ResumeCardItem;
