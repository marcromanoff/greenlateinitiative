
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FiltersState {
  email: string;
  name: string;
  school: string;
  schoolType: string;
  position: string;
  townState: string;
}

interface NominationsFiltersProps {
  filters: FiltersState;
  setFilters: (filters: FiltersState) => void;
}

const NominationsFilters = ({ filters, setFilters }: NominationsFiltersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Search by email..."
          value={filters.email}
          onChange={(e) => setFilters({ ...filters, email: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Search by name..."
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="school">School</Label>
        <Input
          id="school"
          placeholder="Search by school..."
          value={filters.school}
          onChange={(e) => setFilters({ ...filters, school: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="schoolType">School Type</Label>
        <Select
          value={filters.schoolType}
          onValueChange={(value) => setFilters({ ...filters, schoolType: value })}
        >
          <SelectTrigger id="schoolType">
            <SelectValue placeholder="Select school type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Types</SelectItem>
            <SelectItem value="public">Public</SelectItem>
            <SelectItem value="charter">Charter</SelectItem>
            <SelectItem value="private">Private</SelectItem>
            <SelectItem value="parochial">Parochial</SelectItem>
            <SelectItem value="religious">Religious</SelectItem>
            <SelectItem value="language_immersion">Language Immersion</SelectItem>
            <SelectItem value="boarding">Boarding</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="position">Position</Label>
        <Select
          value={filters.position}
          onValueChange={(value) => setFilters({ ...filters, position: value })}
        >
          <SelectTrigger id="position">
            <SelectValue placeholder="Select position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Positions</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="administrator">Administrator</SelectItem>
            <SelectItem value="parent">Parent</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="townState">Town and State</Label>
        <Input
          id="townState"
          placeholder="Search by location..."
          value={filters.townState}
          onChange={(e) => setFilters({ ...filters, townState: e.target.value })}
        />
      </div>
    </div>
  );
};

export default NominationsFilters;
